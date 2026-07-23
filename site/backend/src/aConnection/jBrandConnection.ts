const brandConnection = {
  aBrandID: "beehive",
  bBrandName: "Beehive Corporation",

  cFrontendApplicationName: "Beehive Frontend",
  dAdministrationApplicationName: "Beehive Administration",
  eBackendApplicationName: "Beehive Backend",

  fFrontendApplicationURL: "https://beehive-frontend-v02.netlify.app",
  gAdminApplicationURL: "https://beehive-admin-v02.netlify.app",
  hBackendApplicationURL: "https://beehive-backend-v02.netlify.app",

  iEmailName: "@beehive.com",

  jInstagramURL: "https://www.google.com/",
  kXURL: "https://www.google.com/",
  lThreadsURL: "https://www.google.com/",
  mLinkedinURL: "https://www.google.com/",
  nGithubURL: "https://www.google.com/",

  get oBackendBaseURL() {
    return process.env.ENVIRONMENT === "Production"
      ? this.qBackendProductionURL
      : this.pBackendLocalURL;
  },
  pBackendLocalURL: "http://localhost:8000",
  qBackendProductionURL: "https://beehive-backend-v02.onrender.com",

  get rFrontendBaseURL() {
    return process.env.ENVIRONMENT === "Production" ? [ 
      this.tFrontendProductionURL1, 
      this.tFrontendProductionURL2, 
    ] : [ 
      this.sFrontendLocalURL1, 
      this.sFrontendLocalURL2,
      this.sFrontendLocalURL3,
      this.sFrontendLocalURL4,
      this.sFrontendLocalURL5,
      this.sFrontendLocalURL6,
      this.sFrontendLocalURL7,
      this.sFrontendLocalURL8,
      this.sFrontendLocalURL9,
    ];
  },
  sFrontendLocalURL1: "http://localhost:5173",
  sFrontendLocalURL2: "http://localhost:5174",
  sFrontendLocalURL3: "http://localhost:5175",
  sFrontendLocalURL4: "http://localhost:5176",
  sFrontendLocalURL5: "http://localhost:5177",
  sFrontendLocalURL6: "http://localhost:5178",
  sFrontendLocalURL7: "http://localhost:5179",
  sFrontendLocalURL8: "http://localhost:5180",
  sFrontendLocalURL9: "http://localhost:5181",
  tFrontendProductionURL1: "https://beehive-admin-v02.netlify.app",
  tFrontendProductionURL2: "https://beehive-frontend-v02.netlify.app",

  uTagName: "Infinite Wonder Awaits",

  vMainApplication: "Beehive Application",
  vFrontendApplication: "Beehive Application (Frontend)",
  vAdminApplication: "Beehive Application (Admin)",
  vBackendApplication: "Beehive Application (Backend)",
}

export default brandConnection;
