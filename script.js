
            
            let genre = document.getElementById('genre');
            let ageVehicule = parseInt(document.getElementsById("ageVehicule"));
            let valVehicule = parseFloat(document.getElementsById("val-vehicule"));
            let nbrReclamations = parseInt(document.getElementsById("reclamation"));
            let valReclamations = parseFloat(document.getElementsById("montantReclamations"));
            let kilometrage = parseInt(document.getElementsById("km"));
            let camera = document.getElementsById("camera");
            let btnSoumettre = document.getElementById("btnSoumettre");


            btnSoumettre.addEventListener('click', function(event){
                let date = document.getElementById('age').value;
                event.preventDefault();
                console.log(date);
                verifierAge(date);
            })

            function verifierAge(date){
                let age = calculerAge(date);
                console.log(age);
                if(genre.value == "femme"){
                    if (age < 16 || age >= 100){
                        document.getElementById('resultat').innerHTML = "Désolé, nous n'avons aucun produit à offrir pour ce profil de client";              
                    }else if (genre.value == "homme"){
                        document.getElementById('resultat').innerHTML = "Désolé, nous n'avons aucun produit à offrir pour ce profil de client";                
                    }else if (genre.value == "nb"){
                        document.getElementById('resultat').innerHTML = "Désolé, nous n'avons aucun produit à offrir pour ce profil de client";               
                    }
                }
            }
           
            function calculerAge(date){
                var dateDeNaissance = new Date(date);
                const dateActuelle = new Date();
                return dateActuelle.getFullYear()- dateDeNaissance.getFullYear();
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
        
