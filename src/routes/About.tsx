import MenuIcon from '../components/icons/Menu';
import { useMenuStore } from '../store/useMenu';

const Wrapper = () => {
  const toggleMenu = useMenuStore((state) => state.toggleMenu);
  return (
    <div className="bg-slate-100 about-page min-h-screen flex flex-col items-center justify-center">
      <div className="section px-5 md:px-24 lg:px-0 py-8 lg:py-12">
        <div className="mb-8 relative z-10">
          <h4 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary">About Me</h4>
          <MenuIcon
            onClick={toggleMenu}
            className="w-6 h-6 lg:w-7 lg:h-7 absolute right-0 bottom-2 lg:bottom-3 text-primary hover:text-primary-600 transition-all cursor-pointer"></MenuIcon>
        </div>
        <div className="prose sm:prose-sm md:prose-lg lg:prose-xl">
          <p>
            Gift Egwuenu is a Developer Advocate at Cloudflare. With over 5 years of experience in web development and building tools to
            help businesses grow. In her previous role, she was a front-end developer. She is now working in developer advocacy.
          </p>
          <p>
            Gift shares her experience in web development, Jamstack, career-related topics, and developer lifestyle videos with people
            seeking guidance in the tech industry. It's her pleasure to have been named a Cloudinary Media Developer Expert, Microsoft MVP,
            Auth0 Ambassador, GitHub Star, Polynuat Advisor, and Nuxt.js Ambassador.
          </p>
          <p>
            She spends her free time reading, cooking, and going on travel adventures whenever she is not making content or writing code.
          </p>
          <p>
            She shares a lot of helpful resources for developers and also curate some resources myself. You can check out Educative a
            platform with helpful courses for developers. Say hi to her on Twitter @lauragift_.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wrapper;
