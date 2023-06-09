import LaunchIcon from "@mui/icons-material/Launch";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import clsx from "clsx";
import React from "react";

import useStyles from "./HomeContent.styles";

const HomeContent = () => {
  const { classes } = useStyles();

  return (
    <>
      <Container
        maxWidth={false}
        className={clsx(classes.mainContainer, classes.sectionContainer)}
      >
        <Container maxWidth="md">
          <Box mb={8}>
            <img
              width="220"
              height="64"
              src="https://galena.com/wp-content/uploads/2022/12/Logo-Galena.svg"
            />
          </Box>
          <Typography variant="h2" gutterBottom>
            Galena e Edupass: Transformando o desenvolvimento profissional
          </Typography>
          <Typography variant="h3" gutterBottom>
            Faça parte dessa mudança e saiba como podemos te ajudar a promover o
            desenvolvimento de talentos na sua empresa.
          </Typography>
          <Box my={6}>
            <Box sx={{ display: { xs: "none", md: "block" } }}>
              <img
                src="https://galena.com/wp-content/uploads/2022/12/Frame-845.svg"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <img
                src="https://galena.com/wp-content/uploads/2022/12/Frame-845-1.svg"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
          </Box>
          <Button
            color="inverse"
            endIcon={<LaunchIcon />}
            href="https://www.edupass.io/empresas/"
            size="large"
            variant="contained"
          >
            Fale conosco e saiba mais
          </Button>
        </Container>
      </Container>
      <Container maxWidth={false} className={classes.sectionContainer}>
        <Container>
          <Grid container>
            <Grid xs={12} md={6}>
              <Typography variant="h2" mb={4}>
                Uma nova empresa, um único propósito: dar protagonismo ao
                colaborador pelo seu desenvolvimento
              </Typography>
            </Grid>
            <Grid xs={12} md={4} mdOffset={1} pt={{ md: 7 }}>
              <Typography variant="subtitle2">
                Galena e Edupass se uniram para mudar a forma como desenvolvemos
                nossas carreiras. Combinando uma oferta vasta de conteúdos de
                qualidade e tecnologia inovadora, iremos impulsionar o
                crescimento de pessoas e times.
              </Typography>
              <Button
                color="primary"
                endIcon={<LaunchIcon />}
                href="https://www.edupass.io/empresas/"
                size="large"
                sx={{ mt: 4 }}
                variant="text"
              >
                Veja na mídia
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Container maxWidth={false} className={classes.sectionContainer}>
        <Container maxWidth="md">
          <Stack spacing={2} textAlign="center">
            <Typography variant="h2">O que o Edupass faz</Typography>
            <Typography variant="subtitle2">
              Maior plataforma de benefícios educacionais do Brasil, com mais de
              150 mil cursos com até 80% de desconto disponíveis para seus
              colaboradores.
            </Typography>
            <Box>
              <img
                src="https://galena.com/wp-content/uploads/2022/12/test.png"
                srcSet="https://galena.com/wp-content/uploads/2022/12/test-300x204.png 300w, https://galena.com/wp-content/uploads/2022/12/test.png 766w"
                sizes="(max-width: 300px) 300px, (max-width: 766px) 766px"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>
            <Box>
              <Button
                color="primary"
                endIcon={<LaunchIcon />}
                href="https://www.edupass.io/empresas/"
                size="large"
                variant="contained"
              >
                Saiba mais sobre a Edupass!
              </Button>
            </Box>
          </Stack>
        </Container>
      </Container>
      <Container maxWidth={false} className={classes.sectionContainer}>
        <Container>
          <Grid container>
            <Grid xs={12} lg={4}>
              <Typography
                variant="h3"
                sx={{
                  marginBottom: { xs: 4, lg: "0px" },
                  textAlign: { xs: "center", lg: "left" },
                }}
              >
                Saiba quais são as empresas que investem no sucesso da galena{" "}
              </Typography>
            </Grid>
            <Grid xs={12} lg={8} className={classes.brandsContainer}>
              <img
                width="110"
                height="40"
                src="https://galena.com/wp-content/uploads/2022/12/altos.svg"
              />
              <img
                width="219"
                height="40"
                src="https://galena.com/wp-content/uploads/2022/12/globo.png"
              />
              <img
                width="142"
                height="40"
                src="https://galena.com/wp-content/uploads/2022/12/owl.svg"
              />
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Container
        maxWidth={false}
        className={clsx(classes.lastContainer, classes.sectionContainer)}
      >
        <Container maxWidth="sm">
          <Stack spacing={6} textAlign="center">
            <Typography variant="h3">
              Não perca tempo!
              <br />
              Contrate ou indique a edupass para a sua empresa
            </Typography>
            <Box>
              <Button
                color="primary"
                endIcon={<LaunchIcon />}
                href="https://www.edupass.io/empresas/"
                size="large"
                variant="contained"
              >
                Fale conosco e saiba mais
              </Button>
            </Box>
          </Stack>
        </Container>
      </Container>
    </>
  );
};

export default HomeContent;
