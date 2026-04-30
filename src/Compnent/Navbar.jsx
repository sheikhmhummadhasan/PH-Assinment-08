import Image from 'next/image';
import Link from 'next/link';
import LoginForm from './LoginForm';


const Navbar = () => {
    return (
        <div>
            <nav className='flex items-center justify-between p-7'>
                <div className="flex items-center gap-2">
                    <div className='h-[50px] w-[50px] rounded-full flex items-center justify-center bg-[#5751e1]'>
                        <Image src={'/logo.png'} alt='logo' width={30} height={50}>
                        </Image>
                    </div>
                    <div className="">
                        <h2 className='text-2xl font-semibold'>SkillSphere</h2>
                        <p className='text-[#545D70] font-semibold'>GROW YOUR SKILLS</p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Link  href={'/'}>Home</Link>
                    <Link  href={'/courses'}>Courses</Link>
                    <Link  href={'/profile'}>My Profile</Link>
                </div>
                <div className="flex items-center justify-center gap-2">
                    <Image height={50} width={50} src={'/profile-photo.png'} alt='profile photo' className='rounded-full'></Image>
                    <LoginForm></LoginForm>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;