import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";
import RootLayout from "../layout";
import HeaderSimple from "../headerSimple";
import { listesActions } from "../site";
import ListeActionsGauche from "../ListeActionsGauche";
import ImagesBar from "../ImagesBar";

const Entretien = () => {
  const pageTitle = "Entretien";
  const pageDescription =
    "Entretien et nettoyage des toitures, murs, démoussage, suppression du vert des toitures, remplacement des tuiles, ardoises";

  const entretienActions = [
    "Démoussage de la toiture",
    "Nettoyage des murs extérieurs",
    "Suppression du vert des toitures",
    "Remplacement des tuiles endommagées",
    "Remplacement des ardoises défectueuses",
  ];

  // Déclarer les photos dans un tableau d'objets
  const photos = [
    { url: "Groupe_21.png", alt: "gallery" },
    { url: "Groupe_13.png", alt: "gallery" },
    { url: "Groupe_17.png", alt: "gallery" },
    { url: "Groupe_25.png", alt: "gallery" },
  ];

  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />

      <HeaderSimple photos={photos} />
      <ListeActionsGauche
        actions={listesActions[1].actions}
        listeTitle={listesActions[1].title}
        listeSubTitle={listesActions[1].subTitle}
        photo={listesActions[1].photo}
        gauche={true}
        bgColor="bg-green-200"
      />

      <ImagesBar />

      <Footer />
    </RootLayout>
  );
};

export default Entretien;
