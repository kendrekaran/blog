'use client'

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { PenTool, Mail, Lock, ArrowRight, User } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sign up:', { username, email, password });
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-b from-purple-50 to-purple-100">
      <div className="w-full max-w-md">
        <Card className="shadow-xl border-purple-200">
          <CardHeader className="space-y-3 text-center">
            <div className="mx-auto bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center">
              <PenTool className="w-6 h-6 text-purple-600" />
            </div>
            <CardTitle className="text-2xl font-bold text-purple-800">Start Your Blog Journey</CardTitle>
            <CardDescription className="text-purple-600">
              Join our community of passionate writers
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="username" className="text-sm font-medium text-purple-700">
                  Choose Your Blog Username
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-5 w-5 text-purple-400" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="awesome_blogger"
                    className="pl-10 h-12 border-purple-200 focus:border-purple-400 focus:ring-purple-400"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
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
              </div>
              
              <Button type="submit" className="w-full h-12 text-base flex items-center justify-center space-x-2 bg-purple-600 hover:bg-purple-700">
                <span>Start Blogging</span>
                <ArrowRight className="w-5 h-5" />
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 text-center">
            <p className="text-sm text-purple-600">
              By signing up, you agree to our{' '}
              <a href="#" className="text-purple-800 hover:underline">Terms of Service</a>
              {' '}and{' '}
              <a href="#" className="text-purple-800 hover:underline">Content Guidelines</a>
            </p>
            <div className="text-sm text-purple-700">
              Already have a blog?{' '}
              <Link to="/signin" className="text-purple-800 hover:underline font-medium">
                Sign in to your account
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}

