import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";
import ThemeProviderComp from "@components/ThemeProviderComp";

export const metadata = {
  title: "Promptopia",
  description: "Discover and Share AI prompts",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProviderComp>
          <Provider>
            <div className="main">
              <div className="gradient" />
            </div>

            <main className="app">
              <Nav />
              {children}
            </main>
          </Provider>
        </ThemeProviderComp>
      </body>
    </html>
  );
};

export default Rootlayout;
