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
import React from "react";

const page = () => {
  return (
    <div
      className="w-full h-screen flex bg-[#454858] relative text-white justify-center items-center"
      style={{
        backgroundImage: "url(/DSC_4877.jpg)",
        // filter: "blur(2px)",
        // WebkitFilter: "blur(2px)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center 86%",
      }}
    >
      <div
        className="absolute bottom-0 left-0 top-0 right-0 w-full h-full m-auto flex justify-center items-center"
        style={{
          backgroundColor: `rgba(46, 49, 65, 0.8)`,
        }}
      >
        <Card className="glass-card">
          <CardHeader>
            <CardTitle className="text-3xl">Đăng nhập</CardTitle>
            <CardDescription className="font-medium">
              Chọn AI4I - Chọn để dẫn đầu
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    style={{
                      backgroundColor: "white",
                      height: "40px",
                    }}
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    style={{
                      backgroundColor: "white",
                      height: "40px",
                    }}
                  />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="mx-auto">
            <Button
              className="cursor-pointer"
              variant="outline"
              style={{
                width: "100%",
              }}
            >
              Đăng nhập
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default page;
