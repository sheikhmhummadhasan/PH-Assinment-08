'use client'
import { authClient } from "@/lib/auth-client";
import { ArrowRightToSquare } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Signinform = () => {

    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (formData) => {
        const { name, email, password, phone } = formData;

        try {
            setLoading(true);

            const { data, error } = await authClient.signUp.email({
                name,
                email,
                password,
                number: phone,
                callbackURL: "/login"
            });

            console.log({ data, error });

            if (error) {
                toast.error(error.message || "Signup failed");
                return;
            }

            if (data) {
                toast.success("Signup successful 🎉");
                router.push("/login"); 
            }

        } catch (err) {
            console.log(err);
            toast.error("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Modal>
                <Button variant="secondary">Sign Up</Button>

                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />

                            <Modal.Header>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <ArrowRightToSquare className='text-2xl' />
                                </Modal.Icon>
                                <Modal.Heading>Sign Up</Modal.Heading>
                            </Modal.Header>

                            <Modal.Body className="p-6">
                                <Surface variant="default">

                                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

                                        <TextField className="w-full">
                                            <Label>Name</Label>
                                            <Input
                                                {...register('name', { required: "Name is required" })}
                                                type="text"
                                                placeholder="Enter your name"
                                            />
                                            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                                        </TextField>

                                        <TextField className="w-full">
                                            <Label>Email</Label>
                                            <Input
                                                {...register('email', { required: "Email is required" })}
                                                type="email"
                                                placeholder="Enter your email"
                                            />
                                            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                                        </TextField>

                                        {/* ✅ Phone */}
                                        <TextField className="w-full">
                                            <Label>Phone</Label>
                                            <Input
                                                {...register('phone')}
                                                type="tel"
                                                placeholder="Enter your phone number"
                                            />
                                        </TextField>

                                        <TextField className="w-full">
                                            <Label>Password</Label>
                                            <Input
                                                {...register('password', { required: "Password is required" })}
                                                type="password"
                                                placeholder="Enter your password"
                                            />
                                            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                                        </TextField>

                                        <Modal.Footer>
                                            <Button slot="close" variant="secondary">
                                                Cancel
                                            </Button>

                                            <Button type="submit" disabled={loading}>
                                                {loading ? "Signing up..." : "Sign Up"}
                                            </Button>
                                        </Modal.Footer>

                                    </form>

                                </Surface>
                            </Modal.Body>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default Signinform;