<script>
  import ImageGen from '../assets/projects/imagegen.png'
  import Kompoze from '../assets/projects/kompoze.svg'
  import Larakit from '../assets/projects/larakit.jpg'
  import SvelteLogo from '../assets/projects/svelte.png'
  import NatureDrive from '../assets/projects/naturedrive.png'
  import { SquareArrowOutUpRight } from 'lucide-svelte';
  import Project from "./Project.svelte";

</script>
<div class="pt-6">
  <h3 class="text-subheading mb-8 flex items-center gap-2">
    <span>Open Source Projects</span>
    <a href="https://github.com/iamdipankarj" target="_blank" rel="nofollow" class="text-inherit"><SquareArrowOutUpRight class="w-4 h-4" /></a>
  </h3>
  <div class="flex flex-col space-y-6">
    <Project
      src={Larakit}
      title='Larakit - A Laravel 11.x Starter Kit'
      description="Larakit is a lightweight and powerful Laravel starter kit designed to streamline web application development. Built-in authentication using cookies and Laravel Socialite. Role-based access control. React based frontend using Inertia.js. Dashboards and Charts using TailwindCSS."
      demoLink='http://larakit.dipankarjana.com/'
      githubLink='https://github.com/iamdipankarj/larakit'
    />
    <hr />
    <Project
      src={ImageGen}
      title='ImageGen - AI Image Generator'
      description='Let AI design the perfect image for you. Just describe your image and get it in seconds. Generate High Quality Portraits instantly. Upscale your photos easily. Restore your memories from any old photograph.'
      demoLink='http://imagegen.dipankarjana.com/'
      githubLink='https://github.com/iamdipankarj/imagegen'
    />
    <hr />
    <Project
      src={Kompoze}
      title='Kompoze - A React Component Library'
      description='Simple React component library to build faster and more accessible React applications.'
      demoLink='https://iamdipankarj.github.io/kompoze/'
      githubLink='https://github.com/iamdipankarj/kompoze'
    />
    <hr />
    <Project
      src={SvelteLogo}
      title='Portfolio Website - dipankarjana.com'
      description='Simple React component library to build faster and more accessible React applications.'
      demoLink='https://dipankarjana.com/'
      githubLink='https://github.com/iamdipankarj/dipankarjana-site'
    />
    <hr />
    <Project
      src={NatureDrive}
      title='Nature Drive - A Driving Simulator Game'
      description="An immersive driving simulator built with Unity 2022. It offers a mesmerizing journey through breathtaking landscapes that defy reality. Navigate through dreamlike terrains, floating highways. Whether cruising through serene mountaintops or traversing futuristic tunnels, every road is an artistic experience."
      demoLink='https://vimeo.com/1058960148/'
      githubLink={null}
    />
  </div>
</div>
