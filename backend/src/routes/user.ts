import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { Hono } from "hono";
import { sign } from "hono/jwt";
import { signinInput, signupInput } from "@karan901/algoarena-common";

console.log("Imported signupInput:", signupInput); // Debug log


export const userRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
}>();

userRouter.post('/signup', async (c) => {
  const body = await c.req.json();
  const { success } = signupInput.safeParse(body);  
  if(!success){
    c.status(411)
    return c.json({
      message: "Inputs not correct"
    })
  }
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  
  
    try {
      const user = await prisma.user.create({
        data: {
          name : body.name,
          username: body.username,
          password: body.password
        },
      });

      const token = await sign({ id: user.id }, c.env.JWT_SECRET)
  
      return c.json({
        jwt: token
      })
    } catch(e){
      console.log(e)
      c.status(411)
      return c.text("Invalid")
    }
    
})
  
userRouter.post('/signin', async (c) => {
  const body = await c.req.json();
  const {success} = signinInput.safeParse(body)
  if(!success) {
    c.status(411)
    return c.json({
      message: "Inputs not Correct"
    })
  }

  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());


  try {
    const user = await prisma.user.findFirst({
      where: {
        username: body.username,
        password: body.password
      },
    });

    if(!user){
      c.status(403)
      return c.json({
        message : "Incorrecr Credentils"
      })
    }

    const token = await sign({ id: user.id }, c.env.JWT_SECRET)
  
    return c.json({
      jwt: token
    })
  } catch(e){
    console.log(e)
    c.status(411)
    return c.text("Invalid")
  }
  

})
