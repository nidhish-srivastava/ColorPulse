const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-4 md:py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
        <p className="font-semibold text-sm md:text-[1.1rem] mb-4 md:mb-0 md:mr-4">
          &copy; {new Date().getFullYear()} ColorPulse | Developed by Nidhish
        </p>
        <div className="flex justify-center md:justify-end space-x-4">
          <SocialIcon
            href="https://www.linkedin.com/in/nidhish-srivastava/"
            icon="linkedin"
          />
          <SocialIcon href="https://twitter.com/Nidhish_30" icon="twitter" />
          <SocialIcon
            href="https://github.com/nidhish-srivastava"
            icon="github"
          />
        </div>
      </div>
    </footer>
  );
};

const SocialIcon = ({ href, icon }) => {
  let iconComponent;
  switch (icon) {
    case "linkedin":
      iconComponent = (
        <svg
          fill="white"
          height="20px"
          width="20px"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 310 310"
          xml:space="preserve"
        >
          <g id="XMLID_801_">
            <path
              id="XMLID_802_"
              d="M72.16,99.73H9.927c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5H72.16c2.762,0,5-2.238,5-5V104.73
           C77.16,101.969,74.922,99.73,72.16,99.73z"
            />
            <path
              id="XMLID_803_"
              d="M41.066,0.341C18.422,0.341,0,18.743,0,41.362C0,63.991,18.422,82.4,41.066,82.4
           c22.626,0,41.033-18.41,41.033-41.038C82.1,18.743,63.692,0.341,41.066,0.341z"
            />
            <path
              id="XMLID_804_"
              d="M230.454,94.761c-24.995,0-43.472,10.745-54.679,22.954V104.73c0-2.761-2.238-5-5-5h-59.599
           c-2.762,0-5,2.239-5,5v199.928c0,2.762,2.238,5,5,5h62.097c2.762,0,5-2.238,5-5v-98.918c0-33.333,9.054-46.319,32.29-46.319
           c25.306,0,27.317,20.818,27.317,48.034v97.204c0,2.762,2.238,5,5,5H305c2.762,0,5-2.238,5-5V194.995
           C310,145.43,300.549,94.761,230.454,94.761z"
            />
          </g>
        </svg>
      );
      break;
    case "twitter":
      iconComponent = (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-current"
        >
          <path d="M22.46 6c-.78.34-1.61.57-2.48.68.89-.53 1.58-1.36 1.91-2.36-.84.5-1.77.86-2.76 1.06-.79-.84-1.91-1.36-3.15-1.36-2.39 0-4.34 1.95-4.34 4.34 0 .34.04.67.09 1-3.61-.18-6.81-1.87-8.95-4.46-.38.65-.59 1.41-.59 2.22 0 1.52.77 2.86 1.94 3.64-.71-.02-1.38-.22-1.97-.54v.05c0 2.12 1.51 3.89 3.5 4.29-.36.08-.74.12-1.14.12-.28 0-.55-.03-.81-.08.55 1.73 2.14 2.99 4.03 3.03-1.48 1.16-3.35 1.85-5.37 1.85-.35 0-.7-.02-1.05-.07 1.91 1.23 4.18 1.95 6.63 1.95 7.95 0 12.29-6.57 12.29-12.29 0-.19 0-.38-.01-.57.85-.61 1.59-1.38 2.18-2.25z" />
        </svg>
      );
      break;
    case "github":
      iconComponent = (
        <svg width="22px" height="22px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="white">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">

</path>
            </g>
        </g>
    </g>
</svg>
      );
      break;
    default:
      iconComponent = null;
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-300 hover:text-gray-400 transition-colors duration-300"
    >
      {iconComponent}
    </a>
  );
};

export default Footer;
