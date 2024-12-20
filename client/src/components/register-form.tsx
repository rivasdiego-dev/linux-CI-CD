import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link } from "react-router-dom"

export function RegisterForm() {
    return (
        <Card className="mx-auto max-w-sm min-w-[24rem]">
            <CardHeader>
                <CardTitle className="text-2xl">Register</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="username">Username</Label>
                        <Input
                            id="username"
                            type="username"
                            autoComplete="off"
                            required
                        />
                    </div>

                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Password</Label>
                        </div>
                        <Input id="password" type="password" autoComplete="off" required />
                    </div>

                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <Label htmlFor="password">Repeat Password</Label>
                        </div>
                        <Input id="password" type="password" autoComplete="off" required />
                    </div>

                    <Button type="submit" className="w-full">
                        Sign Up!
                    </Button>
                </div>
                <div className="mt-4 text-center text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="underline">
                        Log In
                    </Link>
                </div>
                <div className="mt-4 text-center">
                    <Link to="/" className="uppercase text-xs tracking-wider">
                        Back Home
                    </Link>
                </div>
            </CardContent>
        </Card>
    )
}
