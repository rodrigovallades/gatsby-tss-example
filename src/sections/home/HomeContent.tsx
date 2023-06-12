import LaunchIcon from "@mui/icons-material/Launch";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import clsx from "clsx";
import React from "react";

import useStyles from "./HomeContent.styles";

const Item = styled(Paper)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  alignItems: "center",
  display: "flex",
  height: theme.spacing(7),
  justifyContent: "center",
  textAlign: "center",
}));

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
            href="https://www.edupass.io/empresas/#simular-proposta"
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
                Uma nova empresa, um único propósito: tornar cada colaborador
                protagonista do seu desenvolvimento
              </Typography>
            </Grid>
            <Grid xs={12} md={4} mdOffset={1} pt={{ md: 7 }}>
              <Typography variant="subtitle2">
                Galena e Edupass se uniram para mudar a forma como impactamos o
                desenvolvimento de carreira. Combinando uma oferta vasta de
                conteúdos de qualidade e tecnologia inovadora, iremos
                impulsionar o crescimento de pessoas e times.
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
        <Container>
          <Divider sx={{ my: { xs: 4, md: 8 } }} />
        </Container>
        <Container maxWidth="md">
          <Stack spacing={2} textAlign="center">
            <Typography variant="h2">O que o Edupass faz</Typography>
            <Typography variant="subtitle2">
              Maior plataforma de benefícios educacionais do Brasil, com mais de
              150 mil cursos disponível aos seus colaboradores com até 80% de
              desconto em dezenas de instituições de ensino com abrangência
              nacional.
            </Typography>
            <Box>
              <img
                src="http://galena.com/wp-content/uploads/2023/06/Device-Macbook-Pro.png"
                srcSet="https://galena.com/wp-content/uploads/2023/06/Device-Macbook-Pro.png 836w, https://galena.com/wp-content/uploads/2023/06/Device-Macbook-Pro-300x191.png 300w, https://galena.com/wp-content/uploads/2023/06/Device-Macbook-Pro-768x488.png 768w"
                sizes="(max-width: 836px) 100vw, 836px"
                style={{ maxWidth: "100%", height: "auto" }}
              ></img>
            </Box>
            <Box>
              <Button
                color="primary"
                endIcon={<LaunchIcon />}
                href="https://www.edupass.io/empresas/#simular-proposta"
                size="large"
                variant="contained"
              >
                Saiba mais sobre o Edupass!
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
                Saiba quais são as empresas que investem no sucesso da galena
              </Typography>
            </Grid>
            <Grid xs={12} lg={8} className={classes.investorsContainer}>
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
        className={clsx(classes.brandsContainer, classes.sectionContainer)}
      >
        <Container>
          <Grid container>
            <Grid xs={12} lg={5} pr={{ lg: 3 }}>
              <Typography variant="h3">Instituições parceiras</Typography>
              <Typography variant="subtitle3">
                Encontre cursos das principais instituições de ensino do país.​
              </Typography>
            </Grid>
            <Grid xs={12} lg={7}>
              <Grid container spacing={{ xs: 2, md: 3 }}>
                <Grid xs={12} sm={6} md={4}>
                  <Item>
                    <img
                      width="140"
                      height="33"
                      src="http://galena.com/wp-content/uploads/2023/06/conquer.svg"
                    />
                  </Item>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                  <Item>
                    <img
                      width="105"
                      height="41"
                      src="http://galena.com/wp-content/uploads/2023/06/insper.svg"
                    />
                  </Item>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                  <Item>
                    <img
                      width="92"
                      height="41"
                      src="http://galena.com/wp-content/uploads/2023/06/belasartes.svg"
                    />
                  </Item>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                  <Item>
                    <img
                      width="219"
                      height="28"
                      src="http://galena.com/wp-content/uploads/2023/06/englishcentral.svg"
                    />
                  </Item>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                  <Item>
                    <img
                      width="180"
                      height="28"
                      src="http://galena.com/wp-content/uploads/2023/06/fgv.svg"
                    />
                  </Item>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Divider sx={{ borderColor: "grey.50", my: { xs: 3, md: 5 } }} />
        <Container>
          <Grid container>
            <Grid xs={12} lg={5} pr={{ lg: 3 }}>
              <Typography variant="h3">Empresas parceiras</Typography>
              <Typography variant="subtitle3">
                Empresas que desenvolvem seus times com Edupass​
              </Typography>
            </Grid>
            <Grid xs={12} lg={7}>
              <Grid container spacing={{ xs: 2, md: 3 }}>
                <Grid xs={12} sm={6} md={4}>
                  <Item>
                    <img
                      width="79"
                      height="40"
                      src="http://galena.com/wp-content/uploads/2023/06/gpa.svg"
                    />
                  </Item>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                  <Item>
                    <img
                      width="62"
                      height="40"
                      src="http://galena.com/wp-content/uploads/2023/06/leroy.svg"
                    />
                  </Item>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                  <Item>
                    <img
                      width="122"
                      height="40"
                      src="http://galena.com/wp-content/uploads/2023/06/cielo.svg"
                    />
                  </Item>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                  <Item>
                    <img
                      width="150"
                      height="30"
                      src="http://galena.com/wp-content/uploads/2023/06/c6.svg"
                    />
                  </Item>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                  <Item>
                    <img
                      width="111"
                      height="41"
                      src="http://galena.com/wp-content/uploads/2023/06/loggi.svg"
                    />
                  </Item>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                  <Item>
                    <img
                      width="77"
                      height="33"
                      src="http://galena.com/wp-content/uploads/2023/06/rappi.svg"
                    />
                  </Item>
                </Grid>
                <Grid xs={12} sm={6} md={4}>
                  <Item>
                    <img
                      width="150"
                      height="29"
                      src="http://galena.com/wp-content/uploads/2023/06/deloitte.svg"
                    />
                  </Item>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Container
        maxWidth={false}
        className={clsx(classes.lastContainer, classes.sectionContainer)}
      >
        <Container maxWidth="sm" disableGutters>
          <Stack spacing={6} textAlign="center">
            <Typography variant="h3">
              Não perca tempo! Contrate ou indique o Edupass para a sua empresa
            </Typography>
            <Box>
              <Button
                color="primary"
                endIcon={<LaunchIcon />}
                href="https://www.edupass.io/empresas/"
                size="xlarge"
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
