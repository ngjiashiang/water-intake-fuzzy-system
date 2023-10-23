// very meticulous step, please dont penalise me for mistakes caused by this

export const getTempColdDegreeOfMembership = (x: number) => {
	if (x <= 5) {
		return 1;
	} else if (x > 5 && x <= 15) {
		return -0.1 * x + 1.5;
	}
		
	return 0;
};

export const getTempCoolDegreeOfMembership = (x: number) => {
  if (x <= 10) {
    return 0;
  } else if (x > 10 && x <= 15) {
    return 0.2 * x - 2;
  } else if (x > 15 && x <= 20) {
    return 1;
  } else if (x > 20 && x <= 25) {
    return -0.2 * x + 5;
  }

  return 0;
};

export const getTempModerateDegreeOfMembership = (x: number) => {
	if (x > 20 && x <= 25) {
    return 0.2 * x - 4;
  } else if (x > 25 && x <= 30) {
    return -0.2 * x + 6;
  }

	return 0;
};

export const getTempWarmDegreeOfMembership = (x: number) => {
	if (x > 25 && x <= 30) {
    return 0.2 * x - 5;
  } else if (x > 30 && x <= 35) {
    return -0.2 * x + 7;
  }

  return 0;
};

export const getTempHotDegreeOfMembership = (x: number) => {
  if (x <= 30) {
    return 0;
  } else if (x > 30 && x <= 40) {
    return 0.1 * x - 3;
  }

  return 1;
};


export const getWaterVeryLowDegreeOfMembership = (x: number) => {
  if (x >= 0 && x <= 300) {
    return 1;
  } else if (x > 300 && x <= 500) {
    return -0.005 * x + 2.5;
  }
  
	return 0;
};

export const getWaterLowDegreeOfMembership = (x: number) => {
  if (x > 400 && x <= 600) {
    return 0.005 * x - 2;
  } else if (x > 600 && x <= 800) {
    return -0.005 * x + 4;
  }
  
	return 0;
};

export const getWaterModerateDegreeOfMembership = (x: number) => {
	if (x > 700 && x <= 900) {
    return 0.005 * x - 3.5;
  } else if (x > 900 && x <= 1000) {
    return 1;
  } else if (x > 1000 && x <= 1200) {
    return -0.005 * x + 6;
  }
  
	return 0;
};

export const getWaterHighDegreeOfMembership = (x: number) => {
  if (x > 1000 && x <= 1200) {
    return 0.005 * x - 5;
  } else if (x > 1200 && x <= 1600) {
    return 1;
  } else if (x > 1600 && x <= 1800) {
    return -0.005 * x + 9;
  }
    
	return 0;
};

export const getWaterVeryHighDegreeOfMembership = (x: number) => {
  if (x >= 0 && x <= 1500) {
    return 0;
  } else if (x > 1500 && x <= 1700) {
    return 0.005 * x - 7.5;
  }

  return 1;
};


export const getStepsSedentaryDegreeOfMembership = (x: number) => {
	if (x >= 0 && x <= 2000) {
    return -0.0005 * x + 1;
  }

	return 0;
};

export const getStepsLowActivityDegreeOfMembership = (x: number) => {
  if (x > 1500 && x <= 2500) {
    return 0.001 * x - 1.5;
  } else if (x > 2500 && x <= 4000) {
    return 1;
  } else if (x > 4000 && x <= 5000) {
    return -0.001 * x + 5;
  }
  
	return 0;
};

export const getStepsModerateActivityDegreeOfMembership = (x: number) => {
  if (x > 4000 && x <= 6000) {
    return (1 / 2000) * x - 2;
  } else if (x > 6000 && x <= 8000) {
    return -0.0005 * x + 4;
  }
  
	return 0;
};

export const getStepsActiveDegreeOfMembership = (x: number) => {
  if (x > 7000 && x <= 9000) {
    return 0.0005 * x - 3.5;
  } else if (x > 9000 && x <= 10000) {
    return 1;
  } else if (x > 10000 && x <= 12000) {
    return -0.0005 * x + 6;
  }
    
	return 0;
};

export const getStepsVeryActiveDegreeOfMembership = (x: number) => {
  if (x >= 0 && x <= 10000) {
    return 0;
  } else if (x > 10000 && x <= 12000) {
    return 0.0005 * x - 5;
  }

  return 1;
};

export const getClippedWaterDegreeOfMembership = (yMax: number, value: number, setName: string) => {
  switch(setName) {
    case "Very Low":
      return Math.min(Math.max(getWaterVeryLowDegreeOfMembership(value), 0), yMax)
    case "Low":
      return Math.min(Math.max(getWaterLowDegreeOfMembership(value), 0), yMax)
    case "Moderate":
      return Math.min(Math.max(getWaterModerateDegreeOfMembership(value), 0), yMax)
    case "High":
      return Math.min(Math.max(getWaterHighDegreeOfMembership(value), 0), yMax)
  }  
  return Math.min(Math.max(getWaterVeryHighDegreeOfMembership(value), 0), yMax)
  // return {
  //   veryLow: Math.min(Math.max(getWaterVeryLowDegreeOfMembership(value), 0), yMax),
  //   low: Math.min(Math.max(getWaterLowDegreeOfMembership(value), 0), yMax),
  //   moderate: Math.min(Math.max(getWaterModerateDegreeOfMembership(value), 0), yMax),
  //   high: Math.min(Math.max(getWaterHighDegreeOfMembership(value), 0), yMax),
  //   veryHigh: Math.min(Math.max(getWaterVeryHighDegreeOfMembership(value), 0), yMax),
  // }
}

export const getDegreeOfMembership = (temp: number, water: number, steps: number) => {
  return {
    parameter: {
      temperature: temp,
      water: water,
      steps: steps
    },
    temperature: {
      cold: getTempColdDegreeOfMembership(temp),
      cool: getTempCoolDegreeOfMembership(temp),
      moderate: getTempModerateDegreeOfMembership(temp),
      warm: getTempWarmDegreeOfMembership(temp),
      hot: getTempHotDegreeOfMembership(temp),
    },
    water: {
      veryLow: getWaterVeryLowDegreeOfMembership(water),
      low: getWaterLowDegreeOfMembership(water),
      moderate: getWaterModerateDegreeOfMembership(water),
      high: getWaterHighDegreeOfMembership(water),
      veryHigh: getWaterVeryHighDegreeOfMembership(water),
    },
    steps: {
      sedentary: getStepsSedentaryDegreeOfMembership(steps),
      lowActivity: getStepsLowActivityDegreeOfMembership(steps),
      moderateActivity: getStepsModerateActivityDegreeOfMembership(steps),
      active: getStepsActiveDegreeOfMembership(steps),
      veryActive: getStepsVeryActiveDegreeOfMembership(steps),
    },
  };
};