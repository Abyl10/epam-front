"use client";

import { useState } from "react";
import { login } from "@/api/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";
import { setToken } from "@/utils/token";
import { useUserContext } from "@/context/user-context";

export default function Login() {
  const router = useNavigate();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { fetchUserProfile } = useUserContext();

  const handleLoginPush = async () => {
    setLoading(true);
    try {
      const res = await login(username, password);
      setToken(res.tokens.access);
      fetchUserProfile();
      router("/");
    } catch (err) {
      setError((err as Error).message);
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="m@example.com"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        {error && (
          <p className="text-red-500 mb-4">{"Неправильный логин или пароль"}</p>
        )}
        <Button
          className="w-full"
          onClick={handleLoginPush}
          disabled={!username.length || !password.length || loading}
        >
          {loading ? "Loading..." : "Login"}
        </Button>
      </CardFooter>
    </Card>
  );
}
