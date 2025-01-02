import  { ChangeEvent, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, ArrowRight, User } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { SignupInput } from "@karan901/algoarena-common"
import axios from 'axios'
import { BACKEND_URL } from '@/config';

export default function Authorization({type} : {type : "signin" | "signup"}) {
  const navigate = useNavigate()
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name : "",
    username : "",
    password : ""
  })

  async function sendRequest (){
    try{
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin" }`, postInputs)
      const jwt = response.data
      localStorage.setItem("token", jwt)
      navigate("/blogs")
    }catch(e){
      console.log("Error :" + e)
      alert("Request Failed")
    }
    
  }

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Sign up:', { username, email, password });
  // };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-purple-50 to-purple-100">
      <div className="w-full max-w-md">
        <Card className="shadow-xl border-purple-200">
          <CardHeader className="space-y-3 text-center">
            <div className="mx-auto bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center">
              <PenTool className="w-6 h-6 text-purple-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-purple-800">
              {type === "signup" ? "Start Your Blog Journey" : "Welcome Back, Blogger"}
            </CardTitle>
            <CardDescription className="text-purple-600">
              {type === "signup" ? "Join our community of passionate writers" : "Sign in to continue your writing journey"}
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-6 '>
           { type === "signin" ? "" : <LabelledInput label="Name" placeholder='Karan Kendre...' onChange={(e) =>{
                setPostInputs ({
                  ...postInputs,
                  name : e.target.value
                })
            }} />}

            <LabelledInput label="username" placeholder='karakendre@gmail.com...' onChange={(e) =>{
                setPostInputs ({
                  ...postInputs,
                  username : e.target.value
                })
            }} />

            <LabelledInput label="password" type='password' placeholder='123456' onChange={(e) =>{
                setPostInputs ({
                  ...postInputs,
                  password : e.target.value
                })
            }} />

            <Button type="submit" onClick={sendRequest} className="w-full h-12 text-base flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700">
                  <span>Start Blogging</span>
                  <ArrowRight className="w-5 h-5" />
            </Button>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 text-center">
            <div className="text-sm text-purple-700">
              { type === "signin" ? "Don't Have an account? " : "Already have a Account? " }
              <Link to={type === "signin" ? "/signup" : "/signin"}  
              className="text-purple-800 hover:underline font-medium">
                {type === "signin" ? "Sign up" : "Sign in"}  
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}

interface LabelledInputType{
  label : string
  placeholder : string
  onChange : (e : ChangeEvent<HTMLInputElement> ) => void
  type? : string
}

function LabelledInput({ label, placeholder, onChange , type}: LabelledInputType){
  return(
    <div>
            <form  className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm font-medium text-purple-700">
                  {label}
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-purple-400" />
                  <Input
                    id="username"
                    type={type || "text"}
                    placeholder={placeholder}
                    className="pl-10 h-12 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                    // value={username}
                    onChange={onChange}
                    required
                  />
                </div>
              </div>
              {/* <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-purple-700">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-5 w-5 text-purple-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10 h-12 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-purple-700">
                  Password
                </Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-5 w-5 text-purple-400" />
                  <Input
                    id="password"
                    type="password"
                    className="pl-10 h-12 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div> */}
              
              
            </form>
          </div>
  )
}

