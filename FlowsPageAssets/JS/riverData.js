/*Rivers list - includes:
river name, 
gauges used for correlation, 
corresponding upper and lower limits for those guages based on the gauge trend
*/
let rivers = {
	/*template: {
		name: "",
		url: "comingsoon",
		gauges: {
		   gauge1: {
			name: "",
			risingLimits: {
				lowLmt: ,
				upLmt: 
			},
			steadyLimits: {
				lowLmt: ,
				upLmt: 
			},
			fallingLimits: {
				lowLmt: ,
				upLmt: 
			}		
		   },
		   gauge2: {
			name: "",
			risingLimits: {
				lowLmt: ,
				upLmt: 
			},
			steadyLimits: {
				lowLmt: ,
				upLmt: 
			},
			fallingLimits: {
				lowLmt: ,
				upLmt: 
			}
		   }
	}
	},
	*/
	ballMountainBrook: {
		name: "Ball Mountain Brook",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "SAXTONS RIVER AT SAXTONS RIVER, VT",
		risingLimits: {
			lowLmt: "",
			upLmt: ""
		},
		steadyLimits: {
			lowLmt: "",
			upLmt: ""
		},
		fallingLimits: {
			lowLmt: "",
			upLmt: ""
		}		
	   }
	}
	},
	bartonRiver: {
		name: "Barton River",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "BARTON RIVER NEAR COVENTRY, VT",
		risingLimits: {
			lowLmt: 350,
			upLmt: 850
		},
		steadyLimits: {
			lowLmt: 400,
			upLmt: 900
		},
		fallingLimits: {
			lowLmt: 450,
			upLmt: 950
		}
	   }
	}
	},
	bigBranchOfOtterCreek: {
		name: "The Big Branch of Otter Creek",
		url: "thebigbranch",
		gauges: {
		gauge1: {
		name: "OTTAUQUECHEE RIVER NEAR WEST BRIDGEWATER, VT",
		risingLimits: {
			lowLmt: 100,
			upLmt: 250
		},
		steadyLimits: {
			lowLmt: 125,
			upLmt: 350
		},
		fallingLimits: {
			lowLmt: 150,
			upLmt: 400
		}		
	   }
	   /*gauge1: {
		name: "WALLOOMSAC RIVER NEAR NORTH BENNINGTON, VT",
		risingLimits: {
			lowLmt: 375,
			upLmt: 1500
		},
		steadyLimits: {
			lowLmt: 450,
			upLmt: 1750
		},
		fallingLimits: {
			lowLmt: 550,
			upLmt: 2000
		}		
	   },
	   gauge2: {
		name: "OTTER CREEK AT CENTER RUTLAND, VT",
		risingLimits: {
			lowLmt: 750,
			upLmt: 1800
		},
		steadyLimits: {
			lowLmt: 900,
			upLmt: 2000
		},
		fallingLimits: {
			lowLmt: 1200,
			upLmt: 3000
		}
	   }*/
	}
	},
	bingoBrook: {
		name: "Bingo Brook",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "AYERS BROOK AT RANDOLPH, VT",
		risingLimits: {
			lowLmt: 175, //175
			upLmt: 450
		},
		steadyLimits: {
			lowLmt: 200, //200
			upLmt: 500
		},
		fallingLimits: {
			lowLmt: 225, //225
			upLmt: 550
		}		
	   }
	 }
	},
	bristolNotchBrook: {
		name: "Bristol Notch Brook",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "NEW HAVEN RIVER @ BROOKSVILLE, NR MIDDLEBURY, VT",
		risingLimits: {
			lowLmt: 750, //750
			upLmt: 1300
		},
		steadyLimits: {
			lowLmt: 900, //900
			upLmt: 1500
		},
		fallingLimits: {
			lowLmt: 1100, //1100
			upLmt: 1750
		}		
	   }
	  }
	},
	brownsRiverJericho: {
		name: "Browns River (Jericho)",
		url: "brownsriverjericho",
		gauges: {
	   gauge1: {
		name: "RANCH BROOK AT RANCH CAMP, NEAR STOWE, VT",
		risingLimits: {
			lowLmt: "",
			upLmt: ""
		},
		steadyLimits: {
			lowLmt: "",
			upLmt: ""
		},
		fallingLimits: {
			lowLmt: "",
			upLmt: ""
		}		
	   }
	   }
	},
	brownsRiverLower: {
		name: "Browns River (Lower)",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "LAMOILLE RIVER AT EAST GEORGIA, VT",
		risingLimits: {
			lowLmt: "" ,
			upLmt: ""
		},
		steadyLimits: {
			lowLmt: "",
			upLmt: ""
		},
		fallingLimits: {
			lowLmt: "",
			upLmt: ""
		}		
	   }/*,
	   gauge2: {
		name: "",
		risingLimits: {
			lowLmt: ,
			upLmt: 
		},
		steadyLimits: {
			lowLmt: ,
			upLmt: 
		},
		fallingLimits: {
			lowLmt: ,
			upLmt: 
		}
	   }*/
	}
	},
	cobbBrook: {
		name: "Cobb Brook",
		url: "LEWIS CREEK AT NORTH FERRISBURG, VT",
		gauges: {
	   gauge1: {
		name: "error test",
		risingLimits: {
			lowLmt: "" ,
			upLmt: ""
		},
		steadyLimits: {
			lowLmt: "",
			upLmt: ""
		},
		fallingLimits: {
			lowLmt: "",
			upLmt: ""
		}		
	   }/*,
	   gauge2: {
		name: "",
		risingLimits: {
			lowLmt: ,
			upLmt: 
		},
		steadyLimits: {
			lowLmt: ,
			upLmt: 
		},
		fallingLimits: {
			lowLmt: ,
			upLmt: 
		}
	   }*/
	}
	},
	coldRiverRutland: {
		name: "Cold River (Rutland)",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "OTTER CREEK AT CENTER RUTLAND, VT",
		risingLimits: {
			lowLmt: 1500,
			upLmt: 3500
		},
		steadyLimits: {
			lowLmt: 1750,
			upLmt: 3750
		},
		fallingLimits: {
			lowLmt: 2000,
			upLmt: 4000
		}		
	   }/*,
	   gauge2: {
		name: "",
		risingLimits: {
			lowLmt: ,
			upLmt: 
		},
		steadyLimits: {
			lowLmt: ,
			upLmt: 
		},
		fallingLimits: {
			lowLmt: ,
			upLmt: 
		}
	   }*/
	}
	},
	devilsWashbowl: {
		name: "Devil's Washbowl",
		url: "devilswashbowl",
		gauges: {
	   gauge1: {
		name: "DOG RIVER AT NORTHFIELD FALLS, VT",
		risingLimits: {
			lowLmt: 1500,
			upLmt: 2800
		},
		steadyLimits: {
			lowLmt: 1625,
			upLmt: 2900
		},
		fallingLimits: {
			lowLmt: 1750,
			upLmt: 3000
		}		
	   },
	   }
	},
	eastGranvilleBrook: {
		name: "East Granville Brook",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "AYERS BROOK AT RANDOLPH, VT",
		risingLimits: {
			lowLmt: "",
			upLmt: ""
		},
		steadyLimits: {
			lowLmt: "" ,
			upLmt: ""
		},
		fallingLimits: {
			lowLmt: "",
			upLmt: ""
		}		
	   }/*,
	   gauge2: {
		name: "DOG RIVER AT NORTHFIELD FALLS, VT",
		risingLimits: {
			lowLmt: ,
			upLmt: 
		},
		steadyLimits: {
			lowLmt: ,
			upLmt: 
		},
		fallingLimits: {
			lowLmt: ,
			upLmt: 
		}
	   }*/
	}
	},
	flintBrook: {
		name: "Flint Brook",
		url: "flintbrook",
		gauges: {
	   gauge1: {
		name: "DOG RIVER AT NORTHFIELD FALLS, VT",
		risingLimits: {
			lowLmt: 900,
			upLmt: 1800
		},
		steadyLimits: {
			lowLmt: 1000,
			upLmt: 2150
		},
		fallingLimits: {
			lowLmt: 1100,
			upLmt: 2500
		}		
	   }
	}
	},
	footeBrook: {
		name: "Foote Brook",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "RANCH BROOK AT RANCH CAMP, NEAR STOWE, VT",
		risingLimits: {
			lowLmt: "",
			upLmt: ""
		},
		steadyLimits: {
			lowLmt: "",
			upLmt: ""
		},
		fallingLimits: {
			lowLmt: "",
			upLmt: ""
		}		
	   }/*,
	   gauge2: {
		name: "LAMOILLE RIVER AT JOHNSON, VT",
		risingLimits: {
			lowLmt: ,
			upLmt: 
		},
		steadyLimits: {
			lowLmt: ,
			upLmt: 
		},
		fallingLimits: {
			lowLmt: ,
			upLmt: 
		}
	   }*/
	}
},
	furnaceBrook: {
		name: "Furnace Brook",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "OTTAUQUECHEE RIVER NEAR WEST BRIDGEWATER, VT",
		risingLimits: {
			lowLmt: "" ,
			upLmt: ""
		},
		steadyLimits: {
			lowLmt: "",
			upLmt: ""
		},
		fallingLimits: {
			lowLmt: "",
			upLmt: ""
		}		
	   }
	}
	},
	gihon: {
	  name: "The Gihon",
	  url: "thegihon",
	  gauges: {
	   gauge1: {
		name: "LAMOILLE RIVER AT JOHNSON, VT",
		risingLimits: {
			lowLmt: 1250,
			upLmt: 2000
		},
		steadyLimits: {
			lowLmt: 1350,
			upLmt: 2200
		},
		fallingLimits: {
			lowLmt: 1500,
			upLmt: 2500
		}		
	   }
	  }
  },	
	joesBrook: {
		name: "Joe's Brook",
		url: "comingsoon",
		gauges: {
	   /*gauge1: {
		name: "POPE BROOK (SITE W-3) NEAR NORTH DANVILLE, VT",
		risingLimits: {
			lowLmt: 12,
			upLmt: 150
		},
		steadyLimits: {
			lowLmt: 15,
			upLmt: 90
		},
		fallingLimits: {
			lowLmt: 20,
			upLmt: 100
		}		
	   },*/
	   gauge1: {
		name: "SLEEPERS RIVER (SITE W-5) NEAR ST. JOHNSBURY, VT",
		risingLimits: {
			lowLmt: 250,
			upLmt: 800
		},
		steadyLimits: {
			lowLmt: 275,
			upLmt: 900
		},
		fallingLimits: {
			lowLmt: 300,
			upLmt: 1100
		}
	   }
	}
	},
	kenfieldBrook: {
		name: "Kenfield Brook (Terrill Gorge)",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "RANCH BROOK AT RANCH CAMP, NEAR STOWE, VT",
		risingLimits: {
			lowLmt: 75, 
			upLmt: 250
		},
		steadyLimits: {
			lowLmt: 85,
			upLmt: 300
		},
		fallingLimits: {
			lowLmt: 100,
			upLmt: 350
		}		
	   }
	   /*gauge2: {
		name: "W BRANCH LITTLE R ABV BINGHAM FALLS NEAR STOWE, VT",
		risingLimits: {
			lowLmt: ,
			upLmt: 
		},
		steadyLimits: {
			lowLmt: ,
			upLmt: 
		},
		fallingLimits: {
			lowLmt: ,
			upLmt: 
		}
	   }*/
	}
	},
	lowerLamoille: {
		name: "Lamoille (Lower / 5 Chutes)",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "LAMOILLE RIVER AT EAST GEORGIA, VT",
		risingLimits: {
			lowLmt: 1000,
			upLmt: 10000
		},
		steadyLimits: {
			lowLmt: 1200,
			upLmt: 11000
		},
		fallingLimits: {
			lowLmt: 1200,
			upLmt: 12000
		}		
	   }
	}
	},
	madRiverLower: {
		name: "Mad River (Lower)",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "MAD RIVER NEAR MORETOWN, VT",
		risingLimits: {
			lowLmt: 250,
			upLmt: 4500
		},
		steadyLimits: {
			lowLmt: 300,
			upLmt: 5000
		},
		fallingLimits: {
			lowLmt: 325,
			upLmt: 5500
		}		
	   }
	}
	},
	madRiverUpper: {
		name: "Mad River (Upper)",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "MAD RIVER NEAR MORETOWN, VT",
		risingLimits: {
			lowLmt: 1500,
			upLmt: 5000
		},
		steadyLimits: {
			lowLmt: 1700,
			upLmt: 5500
		},
		fallingLimits: {
			lowLmt: 1900,
			upLmt: 6000
		}		
	   }
	}
	},
	middleburyRiver: {
		name: "Middlebury River",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "NEW HAVEN RIVER @ BROOKSVILLE, NR MIDDLEBURY, VT",
		risingLimits: {
			lowLmt: 200,
			upLmt: 450
		},
		steadyLimits: {
			lowLmt: 225,
			upLmt: 550
		},
		fallingLimits: {
			lowLmt: 250,
			upLmt: 650
		}		
	   }
	}
	},
	millBrookDanby: {
		name: "Mill Brook (Danby Slides)",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "OTTER CREEK AT CENTER RUTLAND, VT",
		risingLimits: {
			lowLmt: "",
			upLmt: ""
		},
		steadyLimits: {
			lowLmt: "",
			upLmt: ""
		},
		fallingLimits: {
			lowLmt: "",
			upLmt: ""
		}		
	   }/*,
	   gauge2: {
		name: "WALLOOMSAC RIVER NEAR NORTH BENNINGTON, VT",
		risingLimits: {
			lowLmt: ,
			upLmt: 
		},
		steadyLimits: {
			lowLmt: ,
			upLmt: 
		},
		fallingLimits: {
			lowLmt: ,
			upLmt: 
		}
	   }*/
	}
	},
	millBrookJericho: {
		name: "Mill Brook (Jericho)",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "RANCH BROOK AT RANCH CAMP, NEAR STOWE, VT",
		risingLimits: {
			lowLmt: "",
			upLmt: ""
		},
		steadyLimits: {
			lowLmt: "",
			upLmt: ""
		},
		fallingLimits: {
			lowLmt: "",
			upLmt: ""
		}		
	   }
	}
	},
	millRiverClarendon: {
		name: "Mill River (Clarendon Gorge)",
		url: "clarendongorge",
		gauges: {
	   /*gauge1: {
		name: "OTTAUQUECHEE RIVER NEAR WEST BRIDGEWATER, VT",
		risingLimits: {
			lowLmt: "",
			upLmt: ""
		},
		steadyLimits: {
			lowLmt: "",
			upLmt: ""
		},
		fallingLimits: {
			lowLmt: "",
			upLmt: ""
		}		
	   },*/
	   gauge1: {
		name: "OTTER CREEK AT CENTER RUTLAND, VT",
		risingLimits: {
			lowLmt: 750,
			upLmt: 2000
		},
		steadyLimits: {
			lowLmt: 850,
			upLmt: 2250
		},
		fallingLimits: {
			lowLmt: 950,
			upLmt: 2500
		}
	   }
	}
	},
	missisquoiRiverSheldonSprings: {
		name: "Missisquoi River (Sheldon Springs Rapids)",
		url: "missisquoiriversheldonsprings",
		gauges: {
	   /*gauge1: {
		name: "MISSISQUOI RIVER NEAR EAST BERKSHIRE, VT",
		risingLimits: {
			lowLmt: 1600,
			upLmt: 4500
		},
		steadyLimits: {
			lowLmt: 1800,
			upLmt: 4750
		},
		fallingLimits: {
			lowLmt: 2000,
			upLmt: 5000
		}		
	   },*/
	   gauge1: {
		name: "MISSISQUOI RIVER AT SWANTON, VT",
		risingLimits: {
			lowLmt: 3400,
			upLmt: 6000
		},
		steadyLimits: {
			lowLmt: 3650,
			upLmt: 7500
		},
		fallingLimits: {
			lowLmt: 3900,
			upLmt: 9000
		}
	   }
	}
	},
	mooseRiverLower: {
		name: "Moose River (Lower)",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "MOOSE RIVER AT VICTORY, VT",
		risingLimits: {
			lowLmt: 300,
			upLmt: 1000
		},
		steadyLimits: {
			lowLmt: 400,
			upLmt: 1500
		},
		fallingLimits: {
			lowLmt: 500,
			upLmt: 2000
		}		
	   }
	}
	},
	mooseRiverUpper: {
		name: "Moose River (Upper)",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "MOOSE RIVER AT VICTORY, VT",
		risingLimits: {
			lowLmt: 475,
			upLmt: 2600
		},
		steadyLimits: {
			lowLmt: 525,
			upLmt: 2800
		},
		fallingLimits: {
			lowLmt: 600,
			upLmt: 3000
		}		
	   }
	}
	},
	mooseRiverTop: {
		name: "Moose River (Top)",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "MOOSE RIVER AT VICTORY, VT",
		risingLimits: {
			lowLmt: "",
			upLmt: ""
		},
		steadyLimits: {
			lowLmt: "",
			upLmt: ""
		},
		fallingLimits: {
			lowLmt: "",
			upLmt: ""
		}		
	   }
	 }
	},
	newHavenLedges: {
	  name: "The New Haven Ledges",
	  url: "comingsoon",
	  gauges: {
	   gauge1: {
		name: "NEW HAVEN RIVER @ BROOKSVILLE, NR MIDDLEBURY, VT",
		risingLimits: {
			lowLmt: 350,
			upLmt: 1100
		},
		steadyLimits: {
			lowLmt: 375,
			upLmt: 1200
		},
		fallingLimits: {
			lowLmt: 400,
			upLmt: 1300
		}		
	   }
	}
  },
    newHavenLower: {
	  name: "The New Haven (Lower)",
	  url: "newhavenlower",
	  gauges: {
	   gauge1: {
		name: "NEW HAVEN RIVER @ BROOKSVILLE, NR MIDDLEBURY, VT",
		risingLimits: {
			lowLmt: 750,
			upLmt: 4000
		},
		steadyLimits: {
			lowLmt: 900,
			upLmt: 6000
		},
		fallingLimits: {
			lowLmt: 1000,
			upLmt: 7000
		}		
	   }
	}
  },
    newHavenUpper: {
		name: "The New Haven (Upper)",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "NEW HAVEN RIVER @ BROOKSVILLE, NR MIDDLEBURY, VT",
		risingLimits: {
			lowLmt: 600,
			upLmt: 1200
		},
		steadyLimits: {
			lowLmt: 725,
			upLmt: 1500
		},
		fallingLimits: {
			lowLmt: 850,
			upLmt: 1800
		}		
	   }
	}
	},
	northBranchOfTheLamoille: {
		name: "North Branch Of The Lamoille",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "LAMOILLE RIVER AT JOHNSON, VT",
		risingLimits: {
			lowLmt: 1500,
			upLmt: 8000
		},
		steadyLimits: {
			lowLmt: 2000,
			upLmt: 9000
		},
		fallingLimits: {
			lowLmt: 2250,
			upLmt: 10000
		}		
	   }/*,
	   gauge2: {
		name: "LAMOILLE RIVER AT EAST GEORGIA, VT",
		risingLimits: {
			lowLmt: 3750,
			upLmt: 12000
		},
		steadyLimits: {
			lowLmt: 4500,
			upLmt: 14000
		},
		fallingLimits: {
			lowLmt: 5250,
			upLmt: 16000
		}
	   }*/
	}
	},
	northBranchOfTheWinooski: {
		name: "North Branch Of The Winooski",
		url: "northbranchwinooski",
		gauges: {
	   gauge1: {
		name: "LITTLE RIVER NEAR STOWE, VT",
		risingLimits: {
			lowLmt: 425,
			upLmt: 2000
		},
		steadyLimits: {
			lowLmt: 500,
			upLmt: 2600
		},
		fallingLimits: {
			lowLmt: 575,
			upLmt: 3200
		}		
	   }/*,
	   gauge2: {
		name: "RANCH BROOK AT RANCH CAMP, NEAR STOWE, VT",
		risingLimits: {
			lowLmt: 60,
			upLmt: 200
		},
		steadyLimits: {
			lowLmt: 75,
			upLmt: 275
		},
		fallingLimits: {
			lowLmt: 90,
			upLmt: 350
		}
	   }*/
	}
	},
	nulhegan: {
		name: "Nulhegan River",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "EAST BRANCH PASSUMPSIC RIVER NEAR EAST HAVEN, VT",
		risingLimits: {
			lowLmt: "",
			upLmt: ""
		},
		steadyLimits: {
			lowLmt: "",
			upLmt: ""
		},
		fallingLimits: {
			lowLmt: "",
			upLmt: ""
		}		
	   }/*,
	   gauge2: {
		name: "MOOSE RIVER AT VICTORY, VT",
		risingLimits: {
			lowLmt: ,
			upLmt: 
		},
		steadyLimits: {
			lowLmt: ,
			upLmt: 
		},
		fallingLimits: {
			lowLmt: ,
			upLmt: 
		}
	   }*/
	}
	},
	ottaugueecheeRiver: {
		name: "Ottauqueechee River",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "OTTAUQUECHEE RIVER AT NORTH HARTLAND, VT",
		risingLimits: {
			lowLmt: 200,
			upLmt: 1500
		},
		steadyLimits: {
			lowLmt: 250,
			upLmt: 1750
		},
		fallingLimits: {
			lowLmt: 300,
			upLmt: 2000
		}		
	   }
	  }
	},
	ottaugueecheeRiver: {
		name: "Otter Creek",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "OTTER CREEK AT MIDDLEBURY, VT",
		risingLimits: {
			lowLmt: 300,
			upLmt: 6500
		},
		steadyLimits: {
			lowLmt: 300,
			upLmt: 6500
		},
		fallingLimits: {
			lowLmt: 300,
			upLmt: 6500
		}		
	   }
	  }
	},
	pattersonBrook: {
		name: "Patterson Brook (Upper White River)",
		url: "patterson",
		gauges: {
	   gauge1: {
		name: "AYERS BROOK AT RANDOLPH, VT",
		risingLimits: {
			lowLmt: 150,
			upLmt: 450
		},
		steadyLimits: {
			lowLmt: 175,
			upLmt: 600
		},
		fallingLimits: {
			lowLmt: 200,
			upLmt: 750
		}		
	   }/*,
	   gauge2: {
		name: "NEW HAVEN RIVER @ BROOKSVILLE, NR MIDDLEBURY, VT",
		risingLimits: {
			lowLmt: 600,
			upLmt: 3500
		},
		steadyLimits: {
			lowLmt: 750,
			upLmt: 3750
		},
		fallingLimits: {
			lowLmt: 900,
			upLmt: 4000
		}
	   }*/
	}
	},
	paulsStreamLower: {
		name: "Paul's Stream (Lower)",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "EAST BRANCH PASSUMPSIC RIVER NEAR EAST HAVEN, VT",
		risingLimits: {
			lowLmt: "",
			upLmt: ""
		},
		steadyLimits: {
			lowLmt: "",
			upLmt: ""
		},
		fallingLimits: {
			lowLmt: "",
			upLmt: ""
		}		
	   }/*,
	   gauge2: {
		name: "MOOSE RIVER AT VICTORY, VT",
		risingLimits: {
			lowLmt: ,
			upLmt: 
		},
		steadyLimits: {
			lowLmt: ,
			upLmt: 
		},
		fallingLimits: {
			lowLmt: ,
			upLmt: 
		}
	   }*/
	}
	},
	paulsStreamUpper: {
		name: "Paul's Stream (Upper)",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "EAST BRANCH PASSUMPSIC RIVER NEAR EAST HAVEN, VT",
		risingLimits: {
			lowLmt: "",
			upLmt: ""
		},
		steadyLimits: {
			lowLmt: "",
			upLmt: ""
		},
		fallingLimits: {
			lowLmt: "",
			upLmt: ""
		}		
	   }/*,
	   gauge2: {
		name: "MOOSE RIVER AT VICTORY, VT",
		risingLimits: {
			lowLmt: ,
			upLmt: 
		},
		steadyLimits: {
			lowLmt: ,
			upLmt: 
		},
		fallingLimits: {
			lowLmt: ,
			upLmt: 
		}
	   }*/
	}
	},
	poultneyRiverLower: {
		name: "Poultney River (Lower)",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "POULTNEY RIVER BELOW FAIR HAVEN, VT",
		risingLimits: {
			lowLmt: 200,
			upLmt: 2000
		},
		steadyLimits: {
			lowLmt: 300,
			upLmt: 2500
		},
		fallingLimits: {
			lowLmt: 400,
			upLmt: 3000
		}		
	   }
	  }
	},
	poultneyRiverUpper: {
		name: "Poultney River (Upper)",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "POULTNEY RIVER BELOW FAIR HAVEN, VT",
		risingLimits: {
			lowLmt: "",
			upLmt: ""
		},
		steadyLimits: {
			lowLmt: "",
			upLmt: ""
		},
		fallingLimits: {
			lowLmt: "",
			upLmt: ""
		}		
	   }
	  }
	},
	ridleyBrook: {
    name: "Ridley Brook",
	url: "ridleybrook",
    gauges:{
     gauge1: {
      name: "RANCH BROOK AT RANCH CAMP, NEAR STOWE, VT",
      risingLimits: {
      lowLmt: 65,
      upLmt: 100  
      },
      fallingLimits: {
      lowLmt: 75,
      upLmt: 200  
      },
      steadyLimits: {
      lowLmt: 70,
      upLmt: 125  
      }
     }
    }
   },
	roaringBranchBattenkill: {
		name: "Roaring Branch of the Battenkill",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "WALLOOMSAC RIVER NEAR NORTH BENNINGTON, VT",
		risingLimits: {
			lowLmt: 370,
			upLmt: 1500
		},
		steadyLimits: {
			lowLmt: 450,
			upLmt: 1750
		},
		fallingLimits: {
			lowLmt: 550,
			upLmt: 2000
		}		
	   }
	}
	},
	rockRiver: {
		name: "Rock River",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "GREEN RIVER NEAR COLRAIN, MA",
		risingLimits: {
			lowLmt: "",
			upLmt: ""
		},
		steadyLimits: {
			lowLmt: "",
			upLmt: ""
		},
		fallingLimits: {
			lowLmt: "",
			upLmt: ""
		}		
	   }
	}
	},
    sterlingBrook: {
	  name: "Sterling Brook",
	  url: "comingsoon",
	  gauges: {
	   gauge1: {
		name: "RANCH BROOK AT RANCH CAMP, NEAR STOWE, VT",
		risingLimits: {
			lowLmt: 75,
			upLmt: 300
		},
		fallingLimits: {
			lowLmt: 120,
			upLmt: 500
		},
		steadyLimits: {
			lowLmt: 100,
			upLmt: 450
		}
	   }
	  }
    },
	stonyBrook: {
		name: "Stony Brook",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "DOG RIVER AT NORTHFIELD FALLS, VT",
		risingLimits: {
			lowLmt: 1000,
			upLmt: 2200
		},
		steadyLimits: {
			lowLmt: 1500,
			upLmt: 2500
		},
		fallingLimits: {
			lowLmt: 1750,
			upLmt: 3000
		}		
	   }
	}
	},
	troutRiver: {
		name: "Trout River",
		url: "thetrout",
		gauges: {
	   gauge1: {
		name: "MISSISQUOI RIVER NEAR EAST BERKSHIRE, VT",
		risingLimits: {
			lowLmt: "",
			upLmt: ""
		},
		steadyLimits: {
			lowLmt: "",
			upLmt: ""
		},
		fallingLimits: {
			lowLmt: "",
			upLmt: ""
		}		
	   }
	  }
	},
	wardsboroBrook: {
		name: "Wardsboro Brook",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "WALLOOMSAC RIVER NEAR NORTH BENNINGTON, VT",
		risingLimits: {
			lowLmt: "",
			upLmt: ""
		},
		steadyLimits: {
			lowLmt: "",
			upLmt: ""
		},
		fallingLimits: {
			lowLmt: "",
			upLmt: ""
		}		
	   }/*,
	   gauge2: {
		name: "",
		risingLimits: {
			lowLmt: ,
			upLmt: 
		},
		steadyLimits: {
			lowLmt: ,
			upLmt: 
		},
		fallingLimits: {
			lowLmt: ,
			upLmt: 
		}
	   }*/
	}
	},
	watermanBrook: {
		name: "Waterman Brook",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "RANCH BROOK AT RANCH CAMP, NEAR STOWE, VT",
		risingLimits: {
			lowLmt: 65,
			upLmt: 175
		},
		steadyLimits: {
			lowLmt: 80,
			upLmt: 190
		},
		fallingLimits: {
			lowLmt: 95,
			upLmt: 205
		}		
	   }/*,
	   gauge2: {
		name: "W BRANCH LITTLE R ABV BINGHAM FALLS NEAR STOWE, VT",
		risingLimits: {
			lowLmt: 75,
			upLmt: 175
		},
		steadyLimits: {
			lowLmt: 90,
			upLmt: 190
		},
		fallingLimits: {
			lowLmt: 105,
			upLmt: 205
		}
	   }*/
	}
	},
	wellsRiver: {
		name: "Wells River",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "WELLS RIVER AT WELLS RIVER, VT",
		risingLimits: {
			lowLmt: 100,
			upLmt: 500
		},
		steadyLimits: {
			lowLmt: 125,
			upLmt: 600
		},
		fallingLimits: {
			lowLmt: 150,
			upLmt: 700
		}		
	   }
	 }
	},
	westBranchDeerfield: {
		name: "West Branch of the Deerfield",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "WALLOOMSAC RIVER NEAR NORTH BENNINGTON, VT",
		risingLimits: {
			lowLmt: "",
			upLmt: ""
		},
		steadyLimits: {
			lowLmt: "",
			upLmt: ""
		},
		fallingLimits: {
			lowLmt: "",
			upLmt: ""
		}		
	   }
	 }
	},
	westRiver: {
		name: "West River",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "WEST RIVER AT JAMAICA, VT",
		risingLimits: {
			lowLmt: 500,
			upLmt: 6000
		},
		steadyLimits: {
			lowLmt: 650,
			upLmt: 6500
		},
		fallingLimits: {
			lowLmt: 800,
			upLmt: 7000
		}		
	   }/*,
	   gauge2: {
		name: "",
		risingLimits: {
			lowLmt: ,
			upLmt: 
		},
		steadyLimits: {
			lowLmt: ,
			upLmt: 
		},
		fallingLimits: {
			lowLmt: ,
			upLmt: 
		}
	   }*/
	}
	},
	willardStream: {
		name: "Willard Stream",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "EAST BRANCH PASSUMPSIC RIVER NEAR EAST HAVEN, VT",
		risingLimits: {
			lowLmt: "",
			upLmt: ""
		},
		steadyLimits: {
			lowLmt: "",
			upLmt: ""
		},
		fallingLimits: {
			lowLmt: "",
			upLmt: ""
		}		
	   }/*,
	   gauge2: {
		name: "MOOSE RIVER AT VICTORY, VT",
		risingLimits: {
			lowLmt: ,
			upLmt: 
		},
		steadyLimits: {
			lowLmt: ,
			upLmt: 
		},
		fallingLimits: {
			lowLmt: ,
			upLmt: 
		}
	   }*/
	}
	},
	winhallRiver: {
		name: "Winhall River",
		url: "comingsoon",
		gauges: {
	   gauge1: {
		name: "SAXTONS RIVER AT SAXTONS RIVER, VT",
		risingLimits: {
			lowLmt: "",
			upLmt: ""
		},
		steadyLimits: {
			lowLmt: "",
			upLmt: ""
		},
		fallingLimits: {
			lowLmt: "",
			upLmt: ""
		}		
	   }
	 }
	},
    
  
  };

export default rivers;

