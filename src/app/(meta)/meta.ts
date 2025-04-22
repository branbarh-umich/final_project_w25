import { type PageMeta, type Page, type Social, type SectionGroup, type Content } from "@/(meta)/types";

// Config import:
import config from "../../../next.config.mjs";

export function getPages(): PageMeta {
  // Get the list of page names and routes:
  // [TODO] Hard-coded for now until MongoDB is setup:
  const pages: Page[] = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "About",
      path: "/about"
    },
    {
      name: "Experience",
      path: "/experience"
    },
    {
      name: "Projects",
      path: "/projects"
    },
    {
      name: "Skills",
      path: "/skills"
    },
    {
      name: "Connect",
      path: "/connect"
    }
  ];

  // Generate name/route conversion maps:
  let nameToPath: { [key: string]: string } = {};
  let pathToName: { [key: string]: string } = {};
  for (let i = 0; i < pages.length; i++) {
    nameToPath[pages[i].name] = pages[i].path;
    pathToName[pages[i].path] = pages[i].name;
  }

  return {
    pages,
    nameToPath,
    pathToName
  };
}

export function getFooterSocials(): Social[] {
  // [TODO] Hard-coded for now until MongoDB is setup:
  return [
    {
      name: "LinkedIn",
      iconSrc: `${config.basePath}/assets/icons/linkedin.svg`,
      href: "https://linkedin.com/in/branbarh"
    },
    {
      name: "Email",
      iconSrc: `${config.basePath}/assets/icons/gmail.svg`,
      href: "mailto:branbarh@umich.edu"
    },
    {
      name: "GitHub",
      iconSrc: `${config.basePath}/assets/icons/github.svg`,
      href: "https://github.com/branbarh"
    }
  ];
}

export function getConnectSocials(): Social[] {
  // [TODO] Hard-coded for now until MongoDB is setup:
  return [
    {
      name: "Brandon on LinkedIn",
      iconSrc: `${config.basePath}/assets/icons/linkedin.svg`,
      href: "https://linkedin.com/in/branbarh"
    },
    {
      name: "branbarh@umich.edu",
      iconSrc: `${config.basePath}/assets/icons/gmail.svg`,
      href: "mailto:branbarh@umich.edu"
    },
    {
      name: "+1 (586) 599 - 9501",
      iconSrc: `${config.basePath}/assets/icons/phone.svg`,
      href: "tel:+15865999501"
    }
  ];
}

export function getContent(page: string): Content[] {
  // [TODO] Hard-coded for now until MongoDB is setup:
  if (page === "skills") {
    return [
      {
        type: "header",
        data: { value: "Header Example", fragmentID: "header-example" }
      },
      {
        type: "photoGroup",
        data: {
          photos: [
            { src: "https://live.staticflickr.com/65535/52880173539_631b5d4184_n.jpg", alt: "AI Beach Kitty :)" },
            { src: "https://live.staticflickr.com/65535/52880173539_631b5d4184_n.jpg", alt: "AI Beach Kitty :)" },
            { src: "https://live.staticflickr.com/65535/52880173539_631b5d4184_n.jpg", alt: "AI Beach Kitty :)" }
          ]
        }
      },
      {
        type: "text",
        data: { value: "Text" }
      },
      {
        type: "bullet",
        data: { bullets: ["Bullet 1", "Bullet 2", "Bullet 3", "Bullet 4", "Bullet 5"] }
      },
      {
        type: "spacer",
        data: {}
      },
      {
        type: "photoHeader",
        data: { value: "Photo Header 123", fragmentID: "realtime-blog-editor-1", photo: { src: "https://live.staticflickr.com/65535/52880173539_631b5d4184_n.jpg", alt: "AI Beach Kitty :)" } }
      }
    ];
  }
  if (page === "about") {
    return [
      {
        type: "header",
        data: { value: "All About Brandon", fragmentID: "all-about-brandon" }
      },
      {
        type: "text",
        data: { value: "Hey there!" }
      },
      {
        type: "text",
        data: {
          value:
            "I'm Brandon Barham, a student at the University of Michigan in Ann Arbor. I'm majoring in Computer Science through the College of Engineering, where I've been building a strong foundation in software development, critical thinking, and design. After this semester, in May of 2025, I’ll officially be graduating with my bachelor’s degree."
        }
      },
      {
        type: "photoGroup",
        data: { photos: [{ src: `${config.basePath}/assets/images/next-to-tree.jpg`, alt: "Brandon wearing light sports/hiking clothes, leaning on a large fallen tree." }] }
      },
      {
        type: "text",
        data: {
          value:
            "As much as I love spending time in nature, my desk is my natural habitat. I’ve always been drawn towards computers and creative problem solving, whether it be for a proof in my cryptography class or a bug in my React app. I have a knack for automating every little task in life, even if it only saves me three seconds in the end."
        }
      },
      {
        type: "text",
        data: {
          value: "You might be wondering how I got into programming to begin with—I think this excerpt from my University of Michigan admissions essay speaks for itself:"
        }
      },
      {
        type: "text",
        data: {
          value: "“Was it destiny? Fate? Chance? Honestly, not even I know."
        }
      },
      {
        type: "text",
        data: {
          value:
            "Let me provide a bit of context. Picture a small party, set in a small colonial, filled with the pleasant aura of a Thanksgiving dinner. An older man, probably in his late 50s, walks over to me. He seems familiar, but I can’t quite put my finger on why—he greets me. Distracted by the potatoes, I don't absorb much of what he says, but one key phrase stands out: Khan Academy. That sole phrase might not carry much significance to an outsider, but I attribute the course of the next decade of my life to that singular moment."
        }
      },
      {
        type: "text",
        data: {
          value:
            "With my age still in the single-digits, I wrote my first program on Khan Academy. Now, I use the term “wrote” loosely here; in reality, I just copied someone else’s program and fiddled with it a little. However, from then on, my curiosity and urge to learn shaped my present-day knowledge. I started writing more complex programs, employing real-world algorithms, and eventually branched out to building web pages and working with Node.js.”"
        }
      },
      {
        type: "text",
        data: {
          value:
            "Since writing this essay, I’ve further honed my skills through coursework, internships, and personal projects—but I know I’m just getting started. I’m very excited to see what the future has to offer."
        }
      },
      {
        type: "spacer",
        data: {}
      },
      {
        type: "header",
        data: { value: "My Mindset", fragmentID: "my-mindset" }
      },
      {
        type: "text",
        data: {
          value:
            "My core philosophy is that a minute today is worth two tomorrow. This guiding principle drives me to always put in maximal effort, even for the small things. I give my everything today, knowing I will reap the benefits down the line."
        }
      },
      {
        type: "text",
        data: {
          value:
            "There’s no better example of this mindset paying off than the car I recently bought—my Toyota GR86. I’ve been saving up to buy a car once I graduated college for years, and through devout research, disciplined financial management, and driven focus (no pun intended), I achieved that dream. I was never chasing a car, though—I was chasing the freedom it offered, and the effort it reflected. This car represents my two minutes paying their dividends."
        }
      },
      {
        type: "photoGroup",
        data: { photos: [{ src: `${config.basePath}/assets/images/gr86.jpg`, alt: "A 2025 Trueno Blue GR86 after a fresh rain, sitting in the parking lot of a Toyota dealership." }] }
      },
      {
        type: "text",
        data: {
          value:
            "Now, every time I get behind the wheel, I'm reminded that the time I put into today shapes the life I get to live tomorrow. It’s a reminder that hard work and determination aren’t just about immediate results—they’re about building something that lasts."
        }
      },
      {
        type: "text",
        data: {
          value: "Also, yes, the GR86 is a manual."
        }
      }
    ];
  }
  return [
    {
      type: "header",
      data: { value: "Header Example", fragmentID: "header-example" }
    },
    {
      type: "text",
      data: {
        value:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros sem, faucibus et suscipit ac, egestas non mauris. Suspendisse sed blandit augue. Fusce quis ante non turpis porttitor sodales sed id justo. Mauris tincidunt tincidunt dolor sit amet convallis. Sed urna enim, scelerisque vel est non, congue maximus magna. Suspendisse convallis libero at dui rhoncus aliquam. Duis turpis est, blandit vitae eros at, facilisis sagittis mauris. Maecenas ullamcorper mattis venenatis.\n\nProin eu augue vel odio ullamcorper euismod. Praesent eget suscipit augue. Nam leo leo, suscipit sed vehicula quis, gravida sit amet dolor. Sed bibendum, mauris non aliquam consequat, neque ante sollicitudin purus, sed placerat nisl lorem quis metus. Praesent scelerisque risus vitae fermentum dapibus. Integer at libero at est porta blandit ac eu nisl. Cras finibus dolor lectus. Donec at odio dui. Proin tincidunt metus a lectus porttitor, in hendrerit erat sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hendrerit malesuada aliquet. Donec porttitor quis augue eget pellentesque.\n\nQuisque luctus molestie ex, at euismod diam mattis eu. Morbi porta ornare nisi eget molestie. Donec lorem felis, tempor sed consectetur id, maximus eget neque. Ut a lorem eu ipsum molestie sollicitudin a in purus. Nam ultricies, nibh ac porttitor congue, dolor nibh ornare sem, sit amet accumsan nisl lorem varius nunc. Nullam placerat nibh ut risus sagittis mollis. Pellentesque aliquam augue et nisi faucibus blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit erat nunc, a pretium justo ornare non. Nunc neque odio, tristique sed lacus nec, ultrices eleifend enim. Morbi ultrices lacus quis velit convallis, ut semper magna tempus. Nullam vehicula, augue a interdum imperdiet, tortor lorem blandit nisl, in tincidunt mi augue maximus ex. Morbi faucibus, risus volutpat fermentum aliquam, nisi massa dapibus eros, quis tristique tellus erat tincidunt erat. Sed rutrum rutrum mauris, at fermentum tellus porttitor tincidunt. Vestibulum commodo, nunc in fringilla vestibulum, nisl ex suscipit lacus, ut lobortis augue lectus sit amet arcu. Vivamus quis arcu magna.\n\nPellentesque interdum vehicula pulvinar. Aliquam vitae interdum ex. Donec mattis ut lacus ac efficitur. Aliquam erat volutpat. Sed sit amet vestibulum nisl. Curabitur id lectus in quam suscipit dignissim fermentum vitae leo. Quisque tincidunt ligula dui, nec ornare ligula commodo quis.\n\nSed bibendum orci ac est placerat iaculis. In hac habitasse platea dictumst. Etiam convallis dolor sapien, vitae porta magna pharetra sed. Donec lobortis ipsum at euismod semper. Vivamus in tellus sapien. Nunc vel mi finibus, viverra sem vitae, pharetra purus. Sed sit amet tincidunt dui, sit amet semper tellus. Vestibulum tincidunt pretium magna, vel pellentesque nisi aliquam vel. Sed ligula mauris, imperdiet at neque condimentum, pellentesque tempor lacus."
      }
    },
    {
      type: "header",
      data: { value: "Realtime Blog Editor", fragmentID: "realtime-blog-editor" }
    },
    {
      type: "text",
      data: { value: "Text" }
    },
    {
      type: "bullet",
      data: { bullets: ["Bullet 1", "Bullet 2", "Bullet 3", "Bullet 4", "Bullet 5"] }
    },
    {
      type: "photoGroup",
      data: { photos: [{ src: "https://live.staticflickr.com/65535/52880173539_631b5d4184_n.jpg", alt: "AI Beach Kitty :)" }] }
    },
    {
      type: "spacer",
      data: {}
    },
    {
      type: "photoGroup",
      data: {
        photos: [
          { src: "https://live.staticflickr.com/65535/52880173539_631b5d4184_n.jpg", alt: "AI Beach Kitty :)" },
          { src: "https://live.staticflickr.com/65535/52880173539_631b5d4184_n.jpg", alt: "AI Beach Kitty :)" },
          { src: "https://live.staticflickr.com/65535/52880173539_631b5d4184_n.jpg", alt: "AI Beach Kitty :)" }
        ]
      }
    },
    {
      type: "spacer",
      data: {}
    },
    {
      type: "photoHeader",
      data: { value: "Photo Header 123", fragmentID: "realtime-blog-editor-1", photo: { src: "https://live.staticflickr.com/65535/52880173539_631b5d4184_n.jpg", alt: "AI Beach Kitty :)" } }
    },
    {
      type: "text",
      data: {
        value:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros sem, faucibus et suscipit ac, egestas non mauris. Suspendisse sed blandit augue. Fusce quis ante non turpis porttitor sodales sed id justo. Mauris tincidunt tincidunt dolor sit amet convallis. Sed urna enim, scelerisque vel est non, congue maximus magna. Suspendisse convallis libero at dui rhoncus aliquam. Duis turpis est, blandit vitae eros at, facilisis sagittis mauris. Maecenas ullamcorper mattis venenatis.\n\nProin eu augue vel odio ullamcorper euismod. Praesent eget suscipit augue. Nam leo leo, suscipit sed vehicula quis, gravida sit amet dolor. Sed bibendum, mauris non aliquam consequat, neque ante sollicitudin purus, sed placerat nisl lorem quis metus. Praesent scelerisque risus vitae fermentum dapibus. Integer at libero at est porta blandit ac eu nisl. Cras finibus dolor lectus. Donec at odio dui. Proin tincidunt metus a lectus porttitor, in hendrerit erat sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hendrerit malesuada aliquet. Donec porttitor quis augue eget pellentesque.\n\nQuisque luctus molestie ex, at euismod diam mattis eu. Morbi porta ornare nisi eget molestie. Donec lorem felis, tempor sed consectetur id, maximus eget neque. Ut a lorem eu ipsum molestie sollicitudin a in purus. Nam ultricies, nibh ac porttitor congue, dolor nibh ornare sem, sit amet accumsan nisl lorem varius nunc. Nullam placerat nibh ut risus sagittis mollis. Pellentesque aliquam augue et nisi faucibus blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit erat nunc, a pretium justo ornare non. Nunc neque odio, tristique sed lacus nec, ultrices eleifend enim. Morbi ultrices lacus quis velit convallis, ut semper magna tempus. Nullam vehicula, augue a interdum imperdiet, tortor lorem blandit nisl, in tincidunt mi augue maximus ex. Morbi faucibus, risus volutpat fermentum aliquam, nisi massa dapibus eros, quis tristique tellus erat tincidunt erat. Sed rutrum rutrum mauris, at fermentum tellus porttitor tincidunt. Vestibulum commodo, nunc in fringilla vestibulum, nisl ex suscipit lacus, ut lobortis augue lectus sit amet arcu. Vivamus quis arcu magna.\n\nPellentesque interdum vehicula pulvinar. Aliquam vitae interdum ex. Donec mattis ut lacus ac efficitur. Aliquam erat volutpat. Sed sit amet vestibulum nisl. Curabitur id lectus in quam suscipit dignissim fermentum vitae leo. Quisque tincidunt ligula dui, nec ornare ligula commodo quis.\n\nSed bibendum orci ac est placerat iaculis. In hac habitasse platea dictumst. Etiam convallis dolor sapien, vitae porta magna pharetra sed. Donec lobortis ipsum at euismod semper. Vivamus in tellus sapien. Nunc vel mi finibus, viverra sem vitae, pharetra purus. Sed sit amet tincidunt dui, sit amet semper tellus. Vestibulum tincidunt pretium magna, vel pellentesque nisi aliquam vel. Sed ligula mauris, imperdiet at neque condimentum, pellentesque tempor lacus."
      }
    },
    {
      type: "header",
      data: { value: "Day Zero", fragmentID: "day-zero" }
    },
    {
      type: "text",
      data: {
        value:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eros sem, faucibus et suscipit ac, egestas non mauris. Suspendisse sed blandit augue. Fusce quis ante non turpis porttitor sodales sed id justo. Mauris tincidunt tincidunt dolor sit amet convallis. Sed urna enim, scelerisque vel est non, congue maximus magna. Suspendisse convallis libero at dui rhoncus aliquam. Duis turpis est, blandit vitae eros at, facilisis sagittis mauris. Maecenas ullamcorper mattis venenatis.\n\nProin eu augue vel odio ullamcorper euismod. Praesent eget suscipit augue. Nam leo leo, suscipit sed vehicula quis, gravida sit amet dolor. Sed bibendum, mauris non aliquam consequat, neque ante sollicitudin purus, sed placerat nisl lorem quis metus. Praesent scelerisque risus vitae fermentum dapibus. Integer at libero at est porta blandit ac eu nisl. Cras finibus dolor lectus. Donec at odio dui. Proin tincidunt metus a lectus porttitor, in hendrerit erat sodales. Interdum et malesuada fames ac ante ipsum primis in faucibus. In hendrerit malesuada aliquet. Donec porttitor quis augue eget pellentesque.\n\nQuisque luctus molestie ex, at euismod diam mattis eu. Morbi porta ornare nisi eget molestie. Donec lorem felis, tempor sed consectetur id, maximus eget neque. Ut a lorem eu ipsum molestie sollicitudin a in purus. Nam ultricies, nibh ac porttitor congue, dolor nibh ornare sem, sit amet accumsan nisl lorem varius nunc. Nullam placerat nibh ut risus sagittis mollis. Pellentesque aliquam augue et nisi faucibus blandit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit erat nunc, a pretium justo ornare non. Nunc neque odio, tristique sed lacus nec, ultrices eleifend enim. Morbi ultrices lacus quis velit convallis, ut semper magna tempus. Nullam vehicula, augue a interdum imperdiet, tortor lorem blandit nisl, in tincidunt mi augue maximus ex. Morbi faucibus, risus volutpat fermentum aliquam, nisi massa dapibus eros, quis tristique tellus erat tincidunt erat. Sed rutrum rutrum mauris, at fermentum tellus porttitor tincidunt. Vestibulum commodo, nunc in fringilla vestibulum, nisl ex suscipit lacus, ut lobortis augue lectus sit amet arcu. Vivamus quis arcu magna.\n\nPellentesque interdum vehicula pulvinar. Aliquam vitae interdum ex. Donec mattis ut lacus ac efficitur. Aliquam erat volutpat. Sed sit amet vestibulum nisl. Curabitur id lectus in quam suscipit dignissim fermentum vitae leo. Quisque tincidunt ligula dui, nec ornare ligula commodo quis.\n\nSed bibendum orci ac est placerat iaculis. In hac habitasse platea dictumst. Etiam convallis dolor sapien, vitae porta magna pharetra sed. Donec lobortis ipsum at euismod semper. Vivamus in tellus sapien. Nunc vel mi finibus, viverra sem vitae, pharetra purus. Sed sit amet tincidunt dui, sit amet semper tellus. Vestibulum tincidunt pretium magna, vel pellentesque nisi aliquam vel. Sed ligula mauris, imperdiet at neque condimentum, pellentesque tempor lacus."
      }
    }
  ];
}

export function getSectionGroups(page: string): SectionGroup[] {
  // [TODO] Hard-coded for now until MongoDB is setup:
  if (page === "about") {
    return [
      {
        name: "Contents",
        sections: [
          {
            name: "All About Brandon",
            fragmentID: "all-about-brandon"
          },
          {
            name: "My Mindset",
            fragmentID: "my-mindset"
          }
        ]
      },
      {
        name: "References",
        sections: [
          {
            name: "GitHub",
            href: "https://github.com/branbarh"
          }
        ]
      }
    ];
  }
  return [
    {
      name: "Contents",
      sections: [
        {
          name: "Header Example",
          fragmentID: "header-example"
        },
        {
          name: "Cool Thing",
          fragmentID: "realtime-blog-editor"
        },
        {
          name: "Project Hello",
          fragmentID: "realtime-blog-editor-1"
        },
        {
          name: "Day Zero",
          fragmentID: "day-zero"
        }
      ]
    },
    {
      name: "References",
      sections: [
        {
          name: "GitHub",
          href: "https://github.com/branbarh"
        }
      ]
    }
  ];
}

// [TODO] reactQuery
// [TODO] Magic UI (https://magicui.design)
