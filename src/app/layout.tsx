
import { ReactNode } from "react";
import QueryProvider from "@/app/providers/QueryProvider";
import {Providers} from "@/app/providers/ChakraProvider";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
      <html lang="en">
      <body>
      <Providers>
        <QueryProvider>{children}</QueryProvider>
      </Providers>
      </body>
      </html>
  );
}
