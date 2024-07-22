"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <Image
        src="data:image/svg+xml;base64,PHN2ZyBzdHJva2U9IiNGRkZGRkYiIGZpbGw9IiNGRkZGRkYiIHN0cm9rZS13aWR0aD0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBoZWlnaHQ9IjIwMHB4IiB3aWR0aD0iMjAwcHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiB4PSIyIiB5PSIyIiBmaWxsPSJub25lIiBzdHJva2Utd2lkdGg9IjIiIHJ4PSIyIj48L3JlY3Q+PC9zdmc+Cg=="
        width={40}
        height={40}
        alt="Loading Light/Dark theme switch"
      />
    );

  if (resolvedTheme === "dark") {
    return (
      <button onClick={() => setTheme("light")}>
        <Image
          src={"/assets/icons/light-sun-icon.svg"}
          alt="Light or Dark theme manual switch"
          width={40}
          height={40}
          className="object-contain"
        />
      </button>
    );
  }

  if (resolvedTheme === "light") {
    return (
      <button onClick={() => setTheme("dark")}>
        <Image
          src={"/assets/icons/dark-moon-icon.svg"}
          alt="Light or Dark theme manual switch"
          width={40}
          height={40}
          className="object-contain"
        />
      </button>
    );
  }
};

export default ThemeSwitch;
