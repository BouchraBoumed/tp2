
            
            let genre = document.getElementById('genre');
            let ageVehicule = document.getElementsById("ageVehicule");
            let valVehicule = parseFloat(document.getElementsById("val-vehicule"));
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



            btnSoumettre.addEventListener('click', function(event){
                let dateAchat = document.getElementById('ageVehiculeActuel').value;
                event.preventDefault();
                console.log(dateAchat);
                verifierAgeVehicule(dateAchat);
            })

            function verifierAgeVehicule(dateAchat){
                let ageVehiculeActuel = calculerAgeVehicule(dateAchat);
                if(ageVehiculeActuel > 25){
                    document.getElementById('resultat').innerHTML = "Désolé, votre véhicule ne peut etre assuré";
                }
            }

            function calculerAgeVehicule(dateAchat){
                var dateAchat = new Date(dateAchat);
                const dateActuelle = new Date();
                return dateActuelle.getFullYear()- dateAchat.getFullYear();
            }

            

            btnSoumettre.addEventListener('click', function(event){
                let valVehicule = parseFloat(document.getElementsById("val-vehicule"));
                event.preventDefault();
                console.log(valVehicule);
                verifierValeurVehicule(valVehicule);
            })

            function verifierValeurVehicule(valVehicule){
                if(valVehicule > 100000){
                    document.getElementById('resultat').innerHTML = "Désolé, votre véhicule ne peut etre assuré";    
                }
            }



            btnSoumettre.addEventListener('click', function(event){
                let nbrReclamations = parseInt(document.getElementsById("reclamation"));
                event.preventDefault();
                validerNbrReclamations(nbrReclamations);
            })


            function validerNbrReclamations(nbrReclamations){
                if(nbrReclamations > 4){
                    document.getElementById('resultat').innerHTML = "Désolé, votre véhicule ne peut être assuré dû au nombre élevé de réclamations";
                }   
            }

            btnSoumettre.addEventListener('click', function(event){
                let valReclamations = parseFloat(document.getElementsById("montantReclamations"));
                event.preventDefault();
                verifierValeurReclamation(valReclamations);
            })

            function verifierValeurReclamation(valReclamations){
                if(valReclamations > 35000){
                document.getElementById('resultat').innerHTML = "Désolé, votre véhicule ne peut être assuré dû au montant élevé de réclamations";
                }
            }
            

            btnSoumettre.addEventListener('click', function(event){
                let kilometrage = parseInt(document.getElementsById("km"));
                event.preventDefault();
                validerKilometrage(kilometrage);
            })

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
                return montantDeBase;
            }
            
            btnSoumettre.addEventListener('click', function(event){
                event.preventDefault();
                calculMontantAnnuel(montantDeBase);
            })

            function calculMontantAnnuel(montantDeBase){
                var assuranceAnnuelle = parsefloat(document.getElementsByTagName("assurance-anuelle"));
                assuranceAnnuelle= montantDeBase +(350*nbrReclamations)+(0.02*kilometrage);
                if(valReclamations > 25000 ){
                    assuranceAnnuelle =+ 700;
                }
                return assuranceAnnuelle;
            }

            function affichageResultat(){
                const assuranceAnnuelle = document.getElementsByTagName("assurance-anuelle").value;
                document.getElementById('resultat').innerHTML = 'Le montant de l`assurance que vous devriez annuellement serait de :' + assuranceAnnuelle + '$';
            }
        
