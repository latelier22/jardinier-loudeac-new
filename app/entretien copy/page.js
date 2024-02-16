import React from "react";
import Navbar from "../NavBar";
import Footer from "../Footer";
import RootLayout from "../layout";
import HeaderSimple from "../headerSimple";
import { listesActions } from "../site";
import ListeActionsGauche from "../ListeActionsGauche";

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




  return (
    <RootLayout pageTitle={pageTitle} pageDescription={pageDescription}>
      <Navbar />

      <ListeActionsGauche  actions={listesActions[0].actions} listeTitle={listesActions[0].title} listeSubTitle={listesActions[0].subTitle} photo={listesActions[0].photo} gauche={true} bgColor="bg-green-200"/>


      <Footer />
    </RootLayout>
  );
};

export default Entretien;
