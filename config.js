var config = {
    style: 'mapbox://styles/mapbox/satellite-streets-v12',
    accessToken: 'pk.eyJ1IjoieXNoaWg1IiwiYSI6ImNsN2dvcGN5djA2bDIzb21uZzM2enBmdHgifQ.Cm4U8hp1bb-1-AQWB5kFSQ',
    showMarkers: false,
    inset: false,
    theme: 'dark',
    use3dTerrain: false,
    auto: false,
    title: '',
    subtitle: '',
    byline: '',
    footer: '',
    chapters: [
        {id: 'us-overview',
            alignment: 'middle',
            hidden: false,
            title: 'North Phoenix’s Loop 101 Corridor Transforms into a Growth Engine',
            subtitle: '',
            image: '',
            description: ` <h5>By Nicole Shih</h5>   
            <p>North Phoenix’s Loop 101 corridor is in the middle of one of its biggest growth cycles in decades. From Desert Ridge’s new headquarters campuses and two major new hospital constructions to fresh experiments in the Scottsdale Airpark, the stretch of freeway between 51st Street and Hayden Road is filling up with construction sites, development proposals, and high profile tenants that together tell a story about the Valley’s growth. What’s driving it is a mix of job growth, new corporate campuses, and a surge of mix-used development that are transforming the area into a “live-work-play” hub in the North Phoenix. Tens of thousands of jobs remain anchored at Scottsdale Airpark, while projects like Cavasson and Sprouts’ new campus are pulling in fresh investment and residents at a clip that’s making this corridor one of the most dynamic real estate markets in metro Phoenix. </p> `, 
            
            location: {
                center: [-111.94, 33.675463453544836],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'locations', opacity: 1, duration: 5000 }
            ],
            onChapterExit: [
                { layer: 'locations', opacity: 0 }
            ]
        },


        //
        {
            id: 'citynorth',
            alignment: 'left',
            hidden: false,
            title: 'CityNorth Project',
            image: '',
            description: '<p>The clearest example of that momentum is CityNorth, a 96-acre mixed-use district next to Desert Ridge Marketplace. Republic Services is putting up a 240,000-square-foot headquarters on a seven-acre site just off 56th Street and the 101, replacing its longtime campus at Allied Way. Across the street, Sprouts Farmers Market has broken ground on a seven-acre corporate campus. The plan calls for a 144,500-square-foot office building paired with a flagship grocery store, high-end retail, and structured parking. Sprouts expects to move in by August 2026. </p>',
            location: {
                center: [-111.97, 33.67363306769817 ],
                zoom: 15.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'locations', opacity: 1, color: 'red', duration: 5000 }
            ],
            onChapterExit: [
                { layer: 'locations', opacity: 0 }
            ]
        },
         {
            id: 'mortenson',
            alignment: 'left',
            hidden: false,
            title: '',
            image: '',
            description: '<p>That wave of investment is spilling over to nearby land once floated for a Coyotes hockey arena. In June 2025, Mortenson closed on 217 acres northwest of Scottsdale Road and the 101, paying $136 million at auction. Its proposal envisions at least five million square feet of mixed-use development, starting with a 350,000-square-foot speculative office campus.</p><p>ASM International is also making a major move in the corridor. The semiconductor equipment maker is doubling its Arizona footprint with a new North American headquarters planned near Loop 101 and Hayden Road. The $300 million, 250,000-square-foot project will bring more than 800 jobs and further cement Arizona’s role in the global chip supply chain.</p> ',
            location: {
                center: [-111.93300160953918,33.66],
                zoom: 14.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'locations', opacity: 1, color: 'red', duration: 5000 }
            ],
            onChapterExit: [
                { layer: 'locations', opacity: 0 }
            ]
        },

         {
            id: 'cavasson',
            alignment: 'left',
            hidden: false,
            title: 'Cavasson: The Flight to Quality',
            image: '',
            description: '<p>Just a few miles east on the 101, Cavasson has become Scottsdale’s clearest example of flight-to-quality. The $1 billion, 135-acre campus at Hayden Road combines 1.8 million square feet of office with 1,600 homes, a hotel, retail, and restaurants. At its core, Cavasson East (18700 N. Hayden Rd.) is a five-story, 440,000-square-foot Class A building now fully leased to Nationwide Insurance, Wells Fargo, and Sigma/Bar-S Foods. Two more five-story offices house Choice Hotels’ tech HQ and Meritage Homes, supported by a six-story garage and retail anchored by PITCH, while the Hilton at Cavasson provides hospitality.</p><p>“Achieving 100% lease occupancy in an extremely tough global office market is a testament to the strength of our project,” said Brian J. Ellis, president of Nationwide Realty Investors. “The fact that top employers and best-in-class brands continue to choose Cavasson is a clear indicator of the flight-to-quality trend.”</p><p>Cavasson sits just a short hop from Mortenson’s planned mixed-use site along the 101 and on the diagonal from Axon’s proposed headquarters expansion. Axon’s plan, enabled by Senate Bill 1543, allows 1,900 housing units and a hotel on its light-industrial parcel without a citywide vote. The move has stirred pushback from residents and fueled debate over how much sway large companies should have in shaping Scottsdale’s zoning rules.</p>',
            location: {
                center: [-111.90919129839082, 33.65605347993039 ],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'locations', opacity: 1, color: 'red', duration: 5000 }
            ],
            onChapterExit: [
                { layer: 'locations', opacity: 0 }
            ]
        },
        {
            id: 'car',
            alignment: 'right',
            hidden: false,
            title: '',
            image: '',
            description: '<p>Meanwhile, Mack Innovation Park Scottsdale (MIP) is setting a new benchmark for industrial development in North Scottsdale. Rising along Loop 101 at Pima and Bell Roads, the campus broke ground in mid-2024 with Phase I: two tilt-up industrial buildings totaling 305,400 square feet, featuring clear heights of more than 32 feet, over 500 parking stalls, and dozens of loading doors. Once built out, the 1.2-million-square-foot park is expected to stand out as a signature hub for light-industrial innovation.</p><p>Another big project, The Loop at North Scottsdale’s Perimeter Center (Loop 101 & East Princess Drive), is set to break ground in summer 2025. The 16.45-acre site will deliver four buildings totaling 267,640 square feet for industrial showrooms, light manufacturing, assembly, and distribution, with sustainable features like low-impact landscaping and EV charging. Completion is expected in late 2026. </p><p>Even storage space is getting a luxury twist in this corridor. Toy Barn has lined up a 10-acre, 205,000-square-foot site inside Mack Innovation Park, where it expects to break ground in winter 2025 on a high-end garage condo community. Nearby, Silverleaf Auto Garages at 9271 E Hidden Spur Trail, part of the DC Ranch Corporate Center, has wrapped construction and is now marketing 14 upscale garage condos—some already for sale. The project spans roughly 23,250 square feet and comes with a two-story clubhouse.</p>',
            location: {
                center: [  -111.89,33.64502073366871],
                zoom: 15,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'locations', opacity: 1, color: 'red', duration: 5000 }
            ],
            onChapterExit: [
                { layer: 'locations', opacity: 0 }
            ]
        },
         {
            id: 'mayo',
            alignment: 'left',
            hidden: false,
           title: '<b style="color:#2563eb;">Mayo</b> and <b style="color:#2563eb;">Banner</b> reshape the region’s healthcare future',

            image: '',
            description: '<p>Healthcare is emerging as a powerful driver of North Scottsdale’s growth. At Mayo Boulevard,  <b style="color:#2563eb;">Mayo Clinic</b> has broken ground on a $1.9 billion expansion of its Phoenix campus, adding 1.2 million square feet of new medical space with operating rooms, inpatient beds, and a state-of-the-art procedural building. Completion is projected for 2031, cementing the site as one of the Southwest’s premier healthcare destinations.</p> <p>Just up the road, <b style="color:#2563eb;">Banner Health</b> is preparing a $400 million, 640,000-square-foot hospital with 300 beds at the northeast corner of Hayden Road and Loop 101. The facility represents the second phase of development on a 48-acre parcel the system purchased in March 2023 for $57.6 million. Together, these projects are reshaping the region’s healthcare landscape and fueling long-term demand for surrounding medical office space.</p>',
            location: {
                center: [-111.94932167167855, 33.66132168419694 ],
                zoom: 13,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'locations', opacity: 1, color: 'red', duration: 5000 }
            ],
            onChapterExit: [
                { layer: 'locations', opacity: 0 }
            ]
        },

 {
            id: 'airpark',
            alignment: 'right',
            hidden: false,
            title: 'Scottsdale Airpark: Experimenting with Scale',
            image: '',
            description: '<p>South of Cavasson, the Scottsdale Airpark continues to prove why it’s one of the Valley’s most flexible job hubs, mixing steady office demand with bold experiments in industrial space.</p><p>On the office side, Axis Raintree (8605 E Raintree Dr) has found traction after carving up its larger floorplates into smaller suites. Developers are also chasing big scale. LGE’s warehouse at 7501 E Redfield Rd is still sitting vacant as the team holds out for a single large distribution user. </p><p>And just up the 101, the former CrackerJax site is being remade into The Parque, a billion-dollar mixed-use district blending housing, offices, retail, and public space at a scale Scottsdale hasn’t seen in decades. With City Council approval in 2023 and demolition finished in summer 2025, the first phase will bring apartments, condos, restaurants, and a 1.7-acre central park—marking North Scottsdale’s shift toward walkable, integrated urban districts.</p>',
            location: {
                center: [ -111.89, 33.62315312134081  ],
                zoom: 14,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'locations', opacity: 1, color: 'red', duration: 5000 }
            ],
            onChapterExit: [
                { layer: 'locations', opacity: 0 }
            ]
        },
        {id: 'all',
            alignment: 'middle',
            hidden: true,
            
            location: {
                center: [ -111.9,33.637356778978294],
                zoom: 12,
                pitch: 0,
                bearing: 0
            },
            
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                { layer: 'locations', opacity: 1, duration: 5000 }
            ],
            onChapterExit: [
                { layer: 'locations', opacity: 0 }
            ]
        }

        
        
    ]
};
