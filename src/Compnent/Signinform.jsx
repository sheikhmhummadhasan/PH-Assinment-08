'use client'
import { authClient } from "@/lib/auth-client";
import { ArrowRightToSquare, Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Signinform = () => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = async (e) => {
        console.log(e)
        const { name, email, password, phone } = e;
        const { data, error } = await authClient.signUp.email({
            name: name,
            email: email,
            password: password,
            number: phone,
            callbackURL: "/login"
        });

        console.log(data)
        if (data) {
            toast.success(`congtrulation Signup success`)
        }
        if (error) {
            toast.error(`opps! best of luck try again later`)
        }
    }
    return (
        <div>
            <Modal>
                <Button variant="secondary">Sign In</Button>
                <Modal.Backdrop>
                    <Modal.Container placement="auto">
                        <Modal.Dialog className="sm:max-w-md">
                            <Modal.CloseTrigger />
                            <Modal.Header>
                                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                    <ArrowRightToSquare className='text-2xl'></ArrowRightToSquare>
                                </Modal.Icon>
                                <Modal.Heading>SignIn</Modal.Heading>
                            </Modal.Header>
                            <Modal.Body className="p-6">
                                <Surface variant="default">
                                    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
                                        <TextField className="w-full" name="name" >
                                            <Label>Name</Label>
                                            <Input  {...register('name')} type="text" placeholder="Enter your name" />
                                        </TextField>
                                        <TextField className="w-full" name="email" >
                                            <Label>Email</Label>
                                            <Input   {...register('email')} type="email" placeholder="Enter your email" />
                                        </TextField>
                                        <TextField name='phone' className="w-full">
                                            <Label>Phone</Label>
                                            <Input   {...register('phone')} type="number" placeholder="Enter your phone number" />
                                        </TextField>
                                        <TextField className="w-full" name="company">
                                            <Label>Password</Label>
                                            <Input   {...register('password')} type="password" placeholder="Enter your company name" />
                                        </TextField>
                                        <Modal.Footer>
                                            <Button slot="close" variant="secondary">
                                                Cancelnput
                                            </Button>
                                            <Button type="submit">Submit</Button>
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