'use client'
import Image from 'next/image';
import Link from 'next/link';
import LoginForm from './LoginForm';
import { authClient } from '@/lib/auth-client';
import Signout from './Signout';
import { usePathname } from 'next/navigation';


const Navbar = () => {
    const path = usePathname();
    const { data: session } = authClient.useSession()
    return (
        <div>
            <nav className='flex-col lg:flex flex-row items-center justify-between p-7'>
                <div className="flex justify-center items-center gap-2">
                    <div className='h-[50px] w-[50px] rounded-full flex items-center justify-center bg-[#5751e1]'>
                        <Image src={'/logo.png'} alt='logo' width={30} height={50}>
                        </Image>
                    </div>
                    <div className="">
                        <h2 className='text-2xl font-semibold'>SkillSphere</h2>
                        <p className='text-[#545D70] font-semibold'>GROW YOUR SKILLS</p>
                    </div>
                </div>
                <div className="flex my-3 justify-center lg:items-center gap-4">
                    <Link className={path === '/' ? 'text-[#5751e1] font-semibold' : ' font-semibold'} href={'/'}>Home</Link>
                    <Link className={path === '/courses' ? 'text-[#5751e1] font-semibold' : ' font-semibold'} href={'/courses'}>Courses</Link>
                    <Link className={path === '/profile' ? 'text-[#5751e1] font-semibold' : ' font-semibold'} href={'/profile'}>My Profile</Link>
                </div>
                <div className="flex items-center justify-center gap-2">

                    {session?.user ? (
                        <>
                            <Image
                                height={50}
                                width={50}
                                src={session.user.image || '/profile-photo.png'}
                                alt='profile'
                                className='rounded-full'
                            />

                            <h2 className="text-sm font-semibold">
                                Welcome <br />
                                <span className='text-[#5157e1]'>
                                    {session.user.name}
                                </span>
                            </h2>

                            <Signout />
                        </>
                    ) : (
                        <LoginForm />
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;