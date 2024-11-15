
            let ageFemme = parseInt(document.getElementsByTagName("age"));
            let ageHomme = parseInt(document.getElementsByTagName("age"));
            let ageNb = parseInt(document.getElementsByTagName("age"));
            let ageVehicule = parseInt(document.getElementsByTagName("ageVehicule"));
            let valVehicule = parseFloat(document.getElementsByTagName("val-vehicule"));
            let nbrReclamations = parseInt(document.getElementsByTagName("reclamation"));
            let valReclamations = parseFloat(document.getElementsByTagName("montantReclamations"));
            let kilometrage = parseInt(document.getElementsByTagName("km"));
            let camera = document.getElementsByTagName("camera");
           
            function calculerAge(age){
                var dateDeNaissance = new Date(dateDeNaissance);
                const dateActuelle = new Date();
                var ageActuel = dateActuelle.getFullYear()- dateDeNaissance.getFullYear();
                ageFemme = ageActuel;
                if (ageFemme < 16 || ageFemme >= 100){
                    document.getElementById('resultat').innerHTML = "Désolé, nous n'avons aucun produit à offrir pour ce profil de client";                }
                ageHomme = ageActuel;
                if(ageHomme < 18 || ageHomme >= 100 ){
                    document.getElementById('resultat').innerHTML = "Désolé, nous n'avons aucun produit à offrir pour ce profil de client";                }
                ageNb = ageActuel;
                if(ageNb <18 || ageNb >= 100){
                    document.getElementById('resultat').innerHTML = "Désolé, nous n'avons aucun produit à offrir pour ce profil de client";                }
            }

            function calculerAgeVehicule(ageVehicule){
                var dateAchat = new Date(dateAchat);
                const dateActuelle = new Date();
                var ageVehiculeActuel = dateActuelle.getFullYear()- dateAchat.getFullYear();
                if(ageVehiculeActuel > 25){
                    document.getElementById('resultat').innerHTML = "Désolé, votre véhicule ne peut etre assuré";
                }
                if(valVehicule > 100000){
                    document.getElementById('resultat').innerHTML = "Désolé, votre véhicule ne peut etre assuré";    
                }
            }
            
            function validerNbrReclamations(nbrReclamations){
                if(nbrReclamations > 4){
                    document.getElementById('resultat').innerHTML = "Désolé, votre véhicule ne peut être assuré dû au nombre élevé de réclamations";
                }    
                        
                if(valReclamations > 35000){
                    document.getElementById('resultat').innerHTML = "Désolé, votre véhicule ne peut être assuré dû au montant élevé de réclamations";
                }

            }
            

            function validerKilometrage(kilometrage){
                if(kilometrage > 500000){
                    document.getElementById('resultat').innerHTML = "Désolé, votre véhicule ne peut être assuré dû au kilometrage élevé parcouru";
                }
            }
            
            if(camera=="non"){
                document.getElementById('resultat').innerHTML = "Désolé, votre véhicule ne peut être assuré si vous n'avez pas de caméra de recul";
            }

            function calculMontantDeBase(){
                var montantDeBase = parsefloat(document.getElementsByTagName("montant-de-base"));
                if(genre == "homme" && ageHomme < 25 || genre == "nb" && ageNb < 25 ){
                    montantDeBase = valVehicule*0.05 ;
                }else if(ageActuel >= 75){
                    montantDeBase = valVehicule*0.04;
                }else{
                    montantDeBase = valVehicule*0.015;
                }
                var assuranceAnuelle = parsefloat(document.getElementsByTagName("assurance-anuelle"));
                assuranceAnnuelle= montantDeBase +(350*nbrReclamations)+(0.02*kilometrage);
                if(valReclamations > 25000 ){
                    assuranceAnuelle =+ 700;
                }
                return assuranceAnuelle;
            }

            function affichageResultat(){
                const assuranceAnnuelle = document.getElementsByTagName("assurance-anuelle").value;
                document.getElementById('resultat').innerHTML = 'Le montant de l`assurance que vous devriez annuellement serait de :' + assuranceAnnuelle + '$';
            }
        
