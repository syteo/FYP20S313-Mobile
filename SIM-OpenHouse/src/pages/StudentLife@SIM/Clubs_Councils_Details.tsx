import { IonCol, IonContent, IonGrid, IonHeader, IonImg, IonList, IonPage, IonRow, IonText, IonThumbnail, IonTitle } from '@ionic/react';
import React, { useEffect, useState } from 'react';

import '../../css/Global.css';
import '../../css/StudentLife.css';
import TopNav from '../../components/TopNav';
import { RouteComponentProps } from 'react-router';
import AnimeGaming from '../../img/studentLife@SIM/arts&Culture/AnimeGaming.jpg';
import DanceArt from '../../img/studentLife@SIM/arts&Culture/DanceArt.png';
import { db } from '../../firebase';

interface Clubs_Councils_Details_Props extends RouteComponentProps<{
    id: string;
}> { }

const Clubs_Councils_Details: React.FC<Clubs_Councils_Details_Props> = ({ match }) => {

    const [clubName, setClubName] = useState([
        'Arts & Culture',
        'International Students Clubs',
        'Student Councils',
        'Special Interest Clubs',
        'Sports & Fitness'
    ]);

    const [clubCouncils, setClubCouncils] = useState([])

    useEffect(() => {
        const clubCouncils: any = []
        db.collection('ClubsAndCouncils').get().then((snapshot) => {
            snapshot.forEach((doc) => {
                const data = doc.data()
                clubCouncils.push(data)
            })
            setClubCouncils(clubCouncils)
        })
    },
        [])
    const artCulture = clubCouncils.filter((club: any) => {
        return club.categoryType == 'Arts & culture'
    })
    const internationalStud = clubCouncils.filter((club: any) => {
        return club.categoryType == 'InternationalStudent'
    })
    const studCouncil = clubCouncils.filter((club: any) => {
        return club.categoryType == 'StudentCouncil'
    })
    const specialInterest = clubCouncils.filter((club: any) => {
        return club.categoryType == 'SpecialInterest'
    })
    const sportFitness = clubCouncils.filter((club: any) => {
        return club.categoryType == 'SportsFitness'
    })

    console.log("arts is" + clubCouncils)
    return (
        <IonPage>
            <IonHeader>
                {match.params.id === 'arts&culture' ?
                    <TopNav title={clubName[0]} route="/u/studentLife@SIM/clubs&councils@SIM" backarrow={true} hamburger={true} /> : ''
                }
                {match.params.id === 'internationalStudentsClubs' ?
                    <TopNav title={clubName[1]} route="/u/studentLife@SIM/clubs&councils@SIM" backarrow={true} hamburger={true} /> : ''
                }
                {match.params.id === 'studentCouncils' ?
                    <TopNav title={clubName[2]} route="/u/studentLife@SIM/clubs&councils@SIM" backarrow={true} hamburger={true} /> : ''
                }
                {match.params.id === 'specialInterestClubs' ?
                    <TopNav title={clubName[3]} route="/u/studentLife@SIM/clubs&councils@SIM" backarrow={true} hamburger={true} /> : ''
                }
                {match.params.id === 'sports&fitness' ?
                    <TopNav title={clubName[4]} route="/u/studentLife@SIM/clubs&councils@SIM" backarrow={true} hamburger={true} /> : ''
                }
            </IonHeader>

            <IonContent fullscreen className="studentLife-content">

                {/* Arts & Culture */}
                {match.params.id === 'arts&culture' ?
                    <>
                        {artCulture.map((club: any) => {
                            return (
                                <div>
                                    <IonList className="clubsCouncils-list">
                                        <IonGrid className="clubsCouncils-details-grid">
                                            <IonRow>
                                                <IonCol size="4" className="ion-align-self-center">
                                                    <IonThumbnail className="clubsCouncils-thumbnail">
                                                        <img src={club.clubsAndCouncilsLogo} alt={club.clubsAndCouncilTitle} />
                                                    </IonThumbnail>
                                                </IonCol>
                                                <IonCol size="8" className="ion-align-self-center">
                                                    <IonRow>
                                                        <IonText className="clubsCouncils-details-heading">{club.clubsAndCouncilTitle}</IonText>
                                                    </IonRow>
                                                    <IonRow>
                                                        <IonText className="clubsCouncils-details-description">{club.clubsAndCouncilDescription}</IonText>
                                                    </IonRow>
                                                </IonCol>
                                            </IonRow>
                                        </IonGrid>
                                    </IonList>
                                </div>
                            )
                        })}


                        <IonList className="clubsCouncils-list">
                            <IonGrid className="clubsCouncils-details-grid">
                                <IonRow>
                                    <IonCol size="4" className="ion-align-self-center">
                                        <IonThumbnail className="clubsCouncils-thumbnail">
                                            <img src={DanceArt} />
                                        </IonThumbnail>
                                    </IonCol>
                                    <IonCol size="8" className="ion-align-self-center">
                                        <IonRow>
                                            <IonText className="clubsCouncils-details-heading">Dance Art</IonText>
                                        </IonRow>
                                        <IonRow>
                                            <IonText className="clubsCouncils-details-description">Dance takes an art form and transcends into beautiful expression over here through Jazz and Contemporary dance.</IonText>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonList>
                    </> : ''
                }

                {/* International Students Clubs */}
                {match.params.id === 'internationalStudentsClubs' ?
                    <>
                        <IonList className="clubsCouncils-list">
                            <IonGrid className="clubsCouncils-details-grid">
                                <IonRow>
                                    <IonCol size="4" className="ion-align-self-center">
                                        <IonThumbnail className="clubsCouncils-thumbnail">
                                            <img src={AnimeGaming} />
                                        </IonThumbnail>
                                    </IonCol>
                                    <IonCol size="8" className="ion-align-self-center">
                                        <IonRow>
                                            <IonText className="clubsCouncils-details-heading">International</IonText>
                                        </IonRow>
                                        <IonRow>
                                            <IonText className="clubsCouncils-details-description">Heading</IonText>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonList>
                    </> : ''
                }

                {/* Student Councils */}
                {match.params.id === 'studentCouncils' ?
                    <>
                        <IonList className="clubsCouncils-list">
                            <IonGrid className="clubsCouncils-details-grid">
                                <IonRow>
                                    <IonCol size="4" className="ion-align-self-center">
                                        <IonThumbnail className="clubsCouncils-thumbnail">
                                            <img src={AnimeGaming} />
                                        </IonThumbnail>
                                    </IonCol>
                                    <IonCol size="8" className="ion-align-self-center">
                                        <IonRow>
                                            <IonText className="clubsCouncils-details-heading">Councils</IonText>
                                        </IonRow>
                                        <IonRow>
                                            <IonText className="clubsCouncils-details-description">Heading</IonText>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonList>
                    </> : ''
                }

                {/* Special Interest Clubs */}
                {match.params.id === 'specialInterestClubs' ?
                    <>
                        <IonList className="clubsCouncils-list">
                            <IonGrid className="clubsCouncils-details-grid">
                                <IonRow>
                                    <IonCol size="4" className="ion-align-self-center">
                                        <IonThumbnail className="clubsCouncils-thumbnail">
                                            <img src={AnimeGaming} />
                                        </IonThumbnail>
                                    </IonCol>
                                    <IonCol size="8" className="ion-align-self-center">
                                        <IonRow>
                                            <IonText className="clubsCouncils-details-heading">Special</IonText>
                                        </IonRow>
                                        <IonRow>
                                            <IonText className="clubsCouncils-details-description">Heading</IonText>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonList>

                    </> : ''
                }

                {/* Sports & Fitness */}
                {match.params.id === 'sports&fitness' ?
                    <>
                        <IonList className="clubsCouncils-list">
                            <IonGrid className="clubsCouncils-details-grid">
                                <IonRow>
                                    <IonCol size="4" className="ion-align-self-center">
                                        <IonThumbnail className="clubsCouncils-thumbnail">
                                            <img src={AnimeGaming} />
                                        </IonThumbnail>
                                    </IonCol>
                                    <IonCol size="8" className="ion-align-self-center">
                                        <IonRow>
                                            <IonText className="clubsCouncils-details-heading">Sports</IonText>
                                        </IonRow>
                                        <IonRow>
                                            <IonText className="clubsCouncils-details-description">Heading</IonText>
                                        </IonRow>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </IonList>
                    </> : ''
                }
            </IonContent>
        </IonPage>
    );
};

export default Clubs_Councils_Details;