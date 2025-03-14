import {
  Anchor,
  AppShell,
  Box,
  Center,
  CSSObject,
  Footer,
  Header,
  Title,
} from "@mantine/core";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({ children }: LayoutProps) {
  const sx: CSSObject = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  };
  const styles = {
    body: {
      flex: "1",
    },
  };

  return (
    <>
      <AppShell
        fixed={false}
        sx={sx}
        styles={styles}
        header={
          <Header height="100px" p="md">
            <Anchor>
              <Title>Hex Tech</Title>
            </Anchor>
          </Header>
        }
        footer={
          <Footer height="auto" p="md">
            <Center>
              <Box>
                powered by <Anchor>Encrypt Huereka </Anchor>,This is an{" "}
                <Anchor href="https://github.com/MauricioRobayo/codetyper">
                  open source
                </Anchor>{" "}
                project
              </Box>
            </Center>
          </Footer>
        }
      >
        {children}
      </AppShell>
    </>
  );
}
