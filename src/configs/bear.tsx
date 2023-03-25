import { FaPaw, FaVuejs, FaRobot } from "react-icons/fa";
import {
  GiNinjaHeroicStance,
  GiJumpingDog,
  GiEnergySword,
  GiCat,
  GiFishEscape
} from "react-icons/gi";
import { VscGithub } from "react-icons/vsc";
import { GoRepo, GoBrowser } from "react-icons/go";
import { RiGamepadLine, RiNewspaperFill } from "react-icons/ri";
import { HiFire } from "react-icons/hi";
import { CgFormatText } from "react-icons/cg";
import { BiCube, BiGame, BiHelpCircle } from "react-icons/bi";
import { BsFillImageFill, BsGrid1X2 } from "react-icons/bs";
import { AiFillAudio, AiFillPicture, AiFillVideoCamera } from "react-icons/ai";

import type { BearData } from "~/types";

const bear: BearData[] = [
  {
    id: "profile",
    title: "Profile",
    icon: <FaPaw />,
    md: [
      {
        id: "about-me",
        title: "About Me",
        file: "markdown/about-me.md",
        icon: <GiNinjaHeroicStance />,
        excerpt: "Greetings! My name is Ritik Makhija and I am..."
      },
      {
        id: "github-stats",
        title: "Github Stats",
        file: "markdown/github-stats.md",
        icon: <VscGithub />,
        excerpt: "Here are some status about my github account..."
      },
      {
        id: "about-site",
        title: "About This Site",
        file: "markdown/about-site.md",
        icon: <GoBrowser />,
        excerpt: "Something about this personal portfolio site..."
      }
    ]
  },
  {
    id: "project",
    title: "Projects",
    icon: <GoRepo />,
    md: [
      {
        id: "Helphub - Social Requisition and Complaint Management System",
        title: "Helphub",
        file: "https://raw.githubusercontent.com/ritik-prog/complain-request-managment-system/master/readme.md",
        icon: <BiHelpCircle />,
        excerpt: "Are you a college student looking to create ...",
        link: "https://github.com/ritik-prog/complain-request-managment-system.git"
      },
      {
        id: "NFT Mint Page",
        title: "NFT Mint Page",
        file: "https://raw.githubusercontent.com/ritik-prog/nft-mint-website/main/README.md",
        icon: <AiFillPicture />,
        excerpt:
          "This platform offers users a secure and straightforward way to manage their...",
        link: "https://github.com/ritik-prog/nft-mint-website/"
      },
      {
        id: "Automated Release",
        title: "Automated Release",
        file: "https://raw.githubusercontent.com/ritik-prog/keyword-release-action/main/README.md",
        icon: <FaRobot />,
        excerpt:
          "The Keyword Releaser will create a release based on the keyword...",
        link: "https://github.com/ritik-prog/keyword-release-action.git"
      }
    ]
  }
];

export default bear;
