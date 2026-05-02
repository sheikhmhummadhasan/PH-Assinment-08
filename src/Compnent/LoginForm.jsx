'use client'
import { Button, Input, Label, Modal, Surface, TextField } from '@heroui/react';
import { ArrowRightToSquare } from '@gravity-ui/icons';
import React, { useState } from 'react';
import Signinform from './Signinform';
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const handelGoogle = async () => {
    try {
      setLoading(true);
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (err) {
      toast.error("Google login failed");
      // console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (formData) => {
    const { email, password } = formData;
    try {
      setLoading(true);
      const { data, error } = await authClient.signIn.email({
        email,
        password,
        rememberMe: true,
        callbackURL: "/",
        redirect: false
      });
      if (error) {
        toast.error(error.message || "Login failed");
        return;
      }
      if (data) {
        toast.success("Login successful");
        router.push("/");
      }
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const { data: session } = authClient.useSession()

  return (
    <div>
      <Modal>
        <Button variant="secondary">Login</Button>

        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />

              <Modal.Header>
                <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                  <ArrowRightToSquare className='text-2xl' />
                </Modal.Icon>
                <Modal.Heading>Login Form</Modal.Heading>
              </Modal.Header>

              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">

                    <TextField className="w-full">
                      <Label>Email</Label>
                      <Input
                        {...register('email', { required: "Email is required" })}
                        type='email'
                        placeholder="Enter your email"
                      />
                      {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
                    </TextField>

                    <TextField className="w-full">
                      <Label>Password</Label>
                      <Input
                        {...register('password', { required: "Password is required" })}
                        type='password'
                        placeholder="Enter your password"
                      />
                      {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
                    </TextField>

                    <h3 className="text-[#9f9e9e]">
                      Don't have an account? <Signinform>Sign Up</Signinform>
                    </h3>

                    <button
                      type='button'
                      onClick={handelGoogle}
                      disabled={loading}
                      className='cursor-pointer border text-center font-semibold w-full py-2 rounded'
                    >
                      {loading ? "Loading..." : "Login with Google"}
                    </button>

                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>

                      <Button type='submit' disabled={loading}>
                        {loading ? "Logging in..." : "Login"}
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

export default LoginForm;