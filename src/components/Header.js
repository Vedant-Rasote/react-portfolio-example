import React, { useEffect, useRef, useState } from "react";
import usePrevious from "../hooks/usePrevious";
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const headerRef = useRef(null);

  const prevScrollPosition = usePrevious(scrollPosition);
  const handleScroll = (initialScroll, newScroll) => {
    headerRef
      .current
      .style
      .transform = (initialScroll > newScroll) ? `translateY(0px)` : `translateY(-200px)`;
  }

  useEffect(() => {
    const onScroll = () => {
      setScrollPosition(window.pageYOffset)
      handleScroll(prevScrollPosition, scrollPosition);
    };
    window.removeEventListener('scroll', onScroll);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [scrollPosition]);

  return (
    <Box ref={headerRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
              {socials.map(ele => <a key={ele.url} href={ele.url}><FontAwesomeIcon icon={ele.icon} size="2x" /></a>)}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <HashLink smooth to="/#projects">Projects</HashLink>
              <HashLink smooth to="/#contactme">Contact Me</HashLink>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
