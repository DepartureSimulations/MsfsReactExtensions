import { useSimVar } from "react-msfs";
import {simVars} from "./simVars";
import {Bool, Knots, msfsUnits} from "./units";

const useAutopilotAirspeedHoldActive = () : Bool => {
    const [airspeedHoldActive] = useSimVar(simVars.autopilot.airspeedHoldActive, msfsUnits.bool);
    return airspeedHoldActive === true;
}

const useAutopilotAirspeedHoldValue = (): Knots => {
    const [airspeedHoldValue] = useSimVar(simVars.autopilot.airspeedHoldValue, msfsUnits.knots);
    return airspeedHoldValue;
}

const useAutopilotMaxCalculatedAirspeed = (): Knots => {
    const [maxAirspeed] = useSimVar(simVars.autopilot.maxCalculatedAirspeed, msfsUnits.knots);
    return maxAirspeed;
}

const useAutopilotMinCalculatedAirspeed = (): Knots => {
    const [minAirspeed] = useSimVar(simVars.autopilot.minCalculatedAirspeed, msfsUnits.knots);
    return minAirspeed;
}

/**
 * Custom hooks for MSFS react. 
 * @deprecated
 */
export const simVarHooks = {
    autopilot: {
        /**
         * Autopilot airspeed hold active status.
         * @returns Bool
         */
        useAirspeedHoldActive: () => useAutopilotAirspeedHoldActive(),
        /**
         * Autopilot airspeed hold value in knots.
         * @returns Knots
         */
        useAirspeedHoldValue: () => useAutopilotAirspeedHoldValue(),
        /**
         * Maximum calculated airspeed in knots.
         */
        useMaxCalculatedAirspeed: () => useAutopilotMaxCalculatedAirspeed(),
        /**
         * Minimum calculated airspeed in knots.
         */
        useMinCalculatedAirspeed: () => useAutopilotMinCalculatedAirspeed(),
    }
}


