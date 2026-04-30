'use client'
import { ArrowRightToSquare, Envelope } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

const Signinform = () => {
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
                                    <form className="flex flex-col gap-4">
                                        <TextField className="w-full" name="name" type="text">
                                            <Label>Name</Label>
                                            <Input name="name" type="text" placeholder="Enter your name" />
                                        </TextField>
                                        <TextField className="w-full" name="email" type="email">
                                            <Label>Email</Label>
                                            <Input name="email" type="email" placeholder="Enter your email" />
                                        </TextField>
                                        <TextField className="w-full" name="phone" type="tel">
                                            <Label>Phone</Label>
                                            <Input name="phone" type="number" placeholder="Enter your phone number" />
                                        </TextField>
                                        <TextField className="w-full" name="company">
                                            <Label>Password</Label>
                                            <Input name="pasword" type="password" placeholder="Enter your company name" />
                                        </TextField>
                                    </form>
                                </Surface>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button slot="close" variant="secondary">
                                    Cancel
                                </Button>
                                <Button slot="close" type="submit">Submit</Button>
                            </Modal.Footer>
                        </Modal.Dialog>
                    </Modal.Container>
                </Modal.Backdrop>
            </Modal>
        </div>
    );
};

export default Signinform;