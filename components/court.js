import { state, subscribe } from "../helpers/state.js";
import { coloringSegments } from "../helpers/coloring-segments.js";
import { addToolTip } from "../helpers/tooltip.js";
import { caclArea } from "../helpers/calcArea.js";

export function renderCourt() {
    const court = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    court.setAttribute("viewBox", "0 0 15.6 15.35");

    court.innerHTML = ` 
            <g
                fill="none"
                stroke="white"
                stroke-width="0.1"
                id="court__marking"
               
            >
                <path
                    d="M 0.2 0.2 l 15.24 0 l 0 14.325 l -15.24 0 l 0 -14.325 m 0.91 0 l 0 4.27 a 7.24 7.24, 0, 0, 0, 13.42 0 l 0 -4.27 m -4.27 0 l 0 5.79 l -0.61 0 m -3.66 0 l -0.61 0 l 0 -5.79  "
                />
                <path
                    stroke-dasharray="0.44"
                    d=" M 0.2 0.2 m 5.18 0 m 0 5.79 m 0.61 0 a 1.83 1.83, 0, 0, 1, 3.66 0  "
                />
                <path
                    d=" M 0.2 8.735 m 5.18 0 m 0 5.79 m 0.61 0 a 1.83 1.83, 0, 0, 1, 3.66 0  "
                />
                <path
                    d=" M 0.2 0.2 m 10.06 5.79 m -0.61 0 a 1.83 1.83, 0, 0, 1, -3.66 0  "
                />
            </g>
            <g  fill="none" stroke-width="0.1" opacity="0.7"  id="court__rim">

                <path
                    stroke="black"
                    d="M 0.2 0.2 m 6.705 1.22 l 1.83 0 m -0.915 0 l 0 0.1515 a 0.2285 0.2285, 0,0,0 0 0.457 a 0.2285 0.2285, 0,0,0 0 -0.457 "
                />
                <circle cx="7.82" cy="1.80" r="0.2285" stroke="#FF4500" />
            </g>
   `;

    return court;
}

export function renderCourtSegments() {
    const courtSegments = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g"
    );

    courtSegments.innerHTML = `
    
                <path
                    id="0-A"
                    class="court-segment"
                    d="M 5.38 0.2 L 5.38 2.77 L 7.82 1.8 L 7.82 0.2 z "
                />
                <path
                    id="0-B"
                    class="court-segment"
                    d="M 3.245 0.2 L 3.245 3.60 L 5.38 2.77 L 5.38 0.2 z "
                />
                <path
                    id="0-C"
                    class="court-segment"
                    d="M 1.11 0.2 L 1.11 4.47 L 3.245 3.60 L 3.245 0.2 z"
                />
                <path
                    id="0-D"
                    class="court-segment"
                    d="M 0.2 0.2 L 0.2 4.83 L 1.11 4.47 L 1.11 0.2 z "
                />
                <path
                    id="45-A"
                    class="court-segment"
                    d="M 5.38 2.77 L 5.38 5.99  L 7.82 1.8  z "
                />

                <path
                    id="45-B"
                    class="court-segment"
                    d="M  3.245 3.6 A 3 4, 0, 0, 0, 4.79 7 L 5.38 5.99 L 5.38 2.77 z "
                />
                <path
                    id="45-C"
                    class="court-segment"
                    d="M 1.11 4.47 A 8 8.8, 0, 0, 0,  4.13 8.05 L 4.79 7 A 3 4, 0, 0 , 1, 3.245 3.6 z "
                />
                <path
                    id="45-D"
                    class="court-segment"
                    d="M 0.2 4.83 A 8 8, 0, 0, 0, 3.72 8.86 L 4.13 8.05 A 8 8.8, 0, 0, 1, 1.11 4.47 z "
                />

                <path
                    id="45-E"
                    class="court-segment"
                    stroke-linejoin="round"
                    d="M 0.2 4.83 L 0.2 14.525 L 3.72 8.85 A 8 8, 0, 0, 1, 0.2 4.83 "
                />

                <path
                    id="90-A"
                    class="court-segment"
                    d="M 5.38 5.99 L 7.82 1.80 L 10.26 5.99 z "
                />
                <path
                    id="90-B"
                    class="court-segment"
                    d="M 4.79 7 L 5.38 5.99 L  10.26 5.99 L 10.85 7  A 6 6, 0, 0, 1, 4.79 7 "
                />
                <path
                    id="90-C"
                    class="court-segment"
                    d="M 4.13 8.05 L 4.79 7  A 6 6, 0, 0, 0, 10.85 7 L 11.47 8.05 A 8 8.8, 0, 0, 1, 4.13 8.05 "
                />

                <path
                    id="90-D"
                    class="court-segment"
                    d="M 3.72 8.85 L 4.13 8.05 A 8 8.8, 0, 0, 0,  11.47 8.05 L 11.92 8.85 A 8 8, 0, 0, 1, 3.72 8.85 "
                />
                <path
                    id="90-E"
                    class="court-segment"
                    stroke-linejoin="round"
                    d="M 0.2 14.525 L 3.72 8.85 A 8 8, 0, 0, 0, 11.92 8.85 L 15.44 14.525 z "
                />
                <path
                    id="135-A"
                    class="court-segment"
                    stroke-linejoin="round"
                    d="M 7.82 1.80 L 10.26 5.99 L 10.26 2.77  z "
                />

                <path
                    id="135-B"
                    class="court-segment"
                    d="M 10.26 2.77 L 10.26 5.99 L 10.85 7 A 3 4, 0, 0, 0, 12.325 3.6 z "
                />

                <path
                    id="135-C"
                    class="court-segment"
                    d="M 10.85 7 L 11.47 8.05 A 8 8.8, 0, 0, 0, 14.53 4.47 L  12.325 3.6  A 3 4, 0, 0, 1, 10.85 7  "
                />
                <path
                    id="135-D"
                    class="court-segment"
                    d="M 11.47 8.05 L 11.92 8.85 A 8 8, 0, 0, 0, 15.44 4.83 L 14.53 4.47 A 8 8.8, 0, 0, 1, 11.47 8.05 "
                />
                <path
                    id="135-E"
                    class="court-segment"
                    stroke-linejoin="round"
                    d="M 11.92 8.85 L 15.44 14.525 L 15.44 4.83 A 8 8, 0, 0, 1, 11.92 8.85 "
                />

                <path
                    id="180-A"
                    class="court-segment"
                    d="M 7.82 0.2 L 7.82 1.80 L 10.26 2.77 L 10.26 0.2 z "
                />

                <path
                    id="180-B"
                    class="court-segment"
                    d="M 10.26 0.2 L 10.26 2.77 L 12.325 3.6 L 12.325 0.2 z "
                />

                <path
                    id="180-C"
                    class="court-segment"
                    d="M 12.325 0.2 L 12.325 3.6 L 14.53 4.47 L 14.53 0.2 z "
                />

                <path
                    id="180-D"
                    class="court-segment"
                    d="M 14.53 0.2 L 14.53 4.47 L 15.44 4.83 L 15.44 0.2 z"
                />
            
    `;

    courtSegments.setAttribute("id", "court__segments");

    courtSegments.setAttribute("fill", "rgba(150,150,150, 0.5");
    courtSegments.setAttribute("stroke-width", "0.15px");
    courtSegments.setAttribute("stroke", "rgb(140,200,200)");

    return courtSegments;
}

export function renderCourtSegmentsColored() {
    const courtSegmentsColored = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g"
    );

    function render() {
        courtSegmentsColored.innerHTML = `
    
                <path
                    id="0-A"
                    class="court-segment"
                    d="M 5.38 0.2 L 5.38 2.77 L 7.82 1.8 L 7.82 0.2 z "
                    data-area="[0]"
                />
                <path
                    id="0-B"
                    class="court-segment"
                    d="M 3.245 0.2 L 3.245 3.60 L 5.38 2.77 L 5.38 0.2 z "
                    data-area="[1]"
                />
                <path
                    id="0-C"
                    class="court-segment"
                    d="M 1.11 0.2 L 1.11 4.47 L 3.245 3.60 L 3.245 0.2 z"
                    data-area="[2]"
                />
                <path
                    id="0-D"
                    class="court-segment"
                    d="M 0.2 0.2 L 0.2 4.83 L 1.11 4.47 L 1.11 0.2 z "
                    data-area="[3]"
                />
                <path
                    id="45-A"
                    class="court-segment"
                    d="M 5.38 2.77 L 5.38 5.99  L 7.82 1.8  z "
                    data-area="[4]"
                />

                <path
                    id="45-B"
                    class="court-segment"
                    d="M  3.245 3.6 A 3 4, 0, 0, 0, 4.79 7 L 5.38 5.99 L 5.38 2.77 z "
                    data-area="[5]"
                />
                <path
                    id="45-C"
                    class="court-segment"
                    d="M 1.11 4.47 A 8 8.8, 0, 0, 0,  4.13 8.05 L 4.79 7 A 3 4, 0, 0 , 1, 3.245 3.6 z "
                    data-area="[6]"
                />
                <path
                    id="45-D"
                    class="court-segment"
                    d="M 0.2 4.83 A 8 8, 0, 0, 0, 3.72 8.86 L 4.13 8.05 A 8 8.8, 0, 0, 1, 1.11 4.47 z "
                    data-area="[7]"
                />

                <path
                    id="45-E"
                    class="court-segment"
                    stroke-linejoin="round"
                    d="M 0.2 4.83 L 0.2 14.525 L 3.72 8.85 A 8 8, 0, 0, 1, 0.2 4.83 "
                    data-area="[8]"
                />

                <path
                    id="90-A"
                    class="court-segment"
                    d="M 5.38 5.99 L 7.82 1.80 L 10.26 5.99 z "
                    data-area="[9]"
                />
                <path
                    id="90-B"
                    class="court-segment"
                    d="M 4.79 7 L 5.38 5.99 L  10.26 5.99 L 10.85 7  A 6 6, 0, 0, 1, 4.79 7 "
                    data-area="[10]"
                />
                <path
                    id="90-C"
                    class="court-segment"
                    d="M 4.13 8.05 L 4.79 7  A 6 6, 0, 0, 0, 10.85 7 L 11.47 8.05 A 8 8.8, 0, 0, 1, 4.13 8.05 "
                    data-area="[11]"
                />

                <path
                    id="90-D"
                    class="court-segment"
                    d="M 3.72 8.85 L 4.13 8.05 A 8 8.8, 0, 0, 0,  11.47 8.05 L 11.92 8.85 A 8 8, 0, 0, 1, 3.72 8.85 "
                    data-area="[12]"
                />
                <path
                    id="90-E"
                    class="court-segment"
                    stroke-linejoin="round"
                    d="M 0.2 14.525 L 3.72 8.85 A 8 8, 0, 0, 0, 11.92 8.85 L 15.44 14.525 z "
                    data-area="[13]"
                />
                <path
                    id="135-A"
                    class="court-segment"
                    stroke-linejoin="round"
                    d="M 7.82 1.80 L 10.26 5.99 L 10.26 2.77  z "
                    data-area="[14]"
                />

                <path
                    id="135-B"
                    class="court-segment"
                    d="M 10.26 2.77 L 10.26 5.99 L 10.85 7 A 3 4, 0, 0, 0, 12.325 3.6 z "
                    data-area="[15]"
                />

                <path
                    id="135-C"
                    class="court-segment"
                    d="M 10.85 7 L 11.47 8.05 A 8 8.8, 0, 0, 0, 14.53 4.47 L  12.325 3.6  A 3 4, 0, 0, 1, 10.85 7  "
                    data-area="[16]"
                />
                <path
                    id="135-D"
                    class="court-segment"
                    d="M 11.47 8.05 L 11.92 8.85 A 8 8, 0, 0, 0, 15.44 4.83 L 14.53 4.47 A 8 8.8, 0, 0, 1, 11.47 8.05 "
                    data-area="[17]"
                />
                <path
                    id="135-E"
                    class="court-segment"
                    stroke-linejoin="round"
                    d="M 11.92 8.85 L 15.44 14.525 L 15.44 4.83 A 8 8, 0, 0, 1, 11.92 8.85 "
                    data-area="[18]"
                />

                <path
                    id="180-A"
                    class="court-segment"
                    d="M 7.82 0.2 L 7.82 1.80 L 10.26 2.77 L 10.26 0.2 z "
                    data-area="[19]"
                />

                <path
                    id="180-B"
                    class="court-segment"
                    d="M 10.26 0.2 L 10.26 2.77 L 12.325 3.6 L 12.325 0.2 z "
                    data-area="[20]"
                />

                <path
                    id="180-C"
                    class="court-segment"
                    d="M 12.325 0.2 L 12.325 3.6 L 14.53 4.47 L 14.53 0.2 z "
                    data-area="[21]"
                />

                <path
                    id="180-D"
                    class="court-segment"
                    d="M 14.53 0.2 L 14.53 4.47 L 15.44 4.83 L 15.44 0.2 z"
                    data-area="[22]"
                />
            
    `;

        courtSegmentsColored.setAttribute("id", "court__segments");

        courtSegmentsColored.setAttribute("fill", "rgba(150,150,150, 0.5");
        courtSegmentsColored.setAttribute("stroke-width", "0.15px");
        courtSegmentsColored.setAttribute("stroke", "rgb(140,200,200)");

        for (
            let index = 0;
            index < courtSegmentsColored.children.length;
            index++
        ) {
            const area = JSON.parse(
                courtSegmentsColored.children[index].dataset.area
            );

            const [makes, shots] = caclArea(state.selectedPlayerId, area);

            coloringSegments(
                courtSegmentsColored.children[index],
                (makes / shots) * 100
            );

            addToolTip(courtSegmentsColored.children[index], makes, shots);
        }
    }

    render();

    subscribe(render);

    return courtSegmentsColored;
}

export function renderCourtAngelsColored() {
    const courtAngelsColored = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g"
    );

    function render() {
        courtAngelsColored.innerHTML = "";

        courtAngelsColored.innerHTML = `
                    <path
                    id="angel-0"
                    class="court-segment-angel"
                    stroke-linejoin="round"
                    d="M 0.2 0.2 L 0.2 4.83 7.82 1.80 L 7.82 0.2 z"
                    data-area="[0, 1, 2, 3]"
                />
                <path
                    id="angel-45"
                    class="court-segment-angel"
                    stroke-linejoin="round"
                    d="M 0.2 4.83 L 0.2 14.525 L 7.82 1.80 z"
                    data-area="[4, 5, 6, 7, 8]"
                />
                <path
                    id="angel-90"
                    class="court-segment-angel"
                    stroke-linejoin="round"
                    d="M 0.2 14.525 L 7.82 1.80 L 15.44 14.525 z"
                    data-area="[9, 10, 11, 12, 13]"
                />
                <path
                    id="angel-135"
                    class="court-segment-angel"
                    stroke-linejoin="round"
                    d="M 7.82 1.8 L 15.44 14.525 L 15.44 4.83 z"
                    data-area="[14, 15, 16, 17, 18]"
                />
                <path
                    id="angel-180"
                    class="court-segment-angel"
                    stroke-linejoin="round"
                    d="M 7.82 0.2 L 7.82 1.8 L 15.44 4.83 15.44 0.2 z"
                    data-area="[19, 20, 21, 22]"
                />
    `;

        courtAngelsColored.setAttribute("id", "court__angels");

        courtAngelsColored.setAttribute("fill", "rgba(150,150,150, 0.5");
        courtAngelsColored.setAttribute("stroke-width", "0.15px");
        courtAngelsColored.setAttribute("stroke", "rgb(140,200,200)");

        for (
            let index = 0;
            index < courtAngelsColored.children.length;
            index++
        ) {
            const area = JSON.parse(
                courtAngelsColored.children[index].dataset.area
            );

            const [makes, shots] = caclArea(state.selectedPlayerId, area);

            coloringSegments(
                courtAngelsColored.children[index],
                (makes / shots) * 100
            );

            addToolTip(courtAngelsColored.children[index], makes, shots);
        }
    }

    render();

    subscribe(render);

    return courtAngelsColored;
}

export function renderCourtDistancesColored() {
    const courtDistancesColored = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g"
    );

    function render() {
        courtDistancesColored.innerHTML = "";

        courtDistancesColored.innerHTML = `

                <path
                    id="distance-A"
                    class="court-segment-distance"
                    stroke-linejoin="round"
                    d="M 5.38 0.2 L 5.38 5.99 L 10.26 5.99 L 10.26 0.2 z"
                    data-area="[0, 4, 9, 14, 19]"
                />
                <path
                    id="distance-B"
                    class="court-segment-distance"
                    stroke-linejoin="round"
                    d="M 3.245 0.2 L 3.245 3.6 A 3 4, 0, 0, 0, 4.79 7  A 6 6, 0, 0, 0, 10.85 7 A 3 4, 0, 0, 0, 12.325 3.6 L 12.325 0.2 L 10.26 0.2 L 10.26 5.99  L 5.38 5.99 L 5.38 0.2 z"
                    data-area="[1, 5, 10, 15, 20]"
                />

                <path
                    id="distance-C"
                    class="court-segment-distance"
                    stroke-linejoin="round"
                    d="M 1.11 0.2 L 1.11 4.47 A 8 8.8, 0, 0, 0, 4.17 8.05 A 8 8.8, 0, 0, 0, 11.47 8.05 A 8 8.8, 0, 0, 0, 14.53 4.47 L 14.53 0.2 L 12.325 0.2 L 12.325 3.6 A 5 5, 0, 0, 1, 10.85 7 A 6 6, 0, 0, 1, 4.79 7 A 5 5, 0, 0, 1, 3.245 3.6 L 3.245 0.2 z"
                    data-area="[2, 6, 11, 16, 21]"
                />
                <path
                    id="distance-D"
                    class="court-segment-distance"
                    stroke-linejoin="round"
                    d="M 0.2 0.2 L 0.2 4.83 A 8 8, 0, 0, 0, 3.72 8.85 A 8 8, 0, 0, 0, 11.92 8.85 A 8 8, 0, 0, 0, 15.44 4.83 L 15.44 0.2  L 14.53 0.2 L 14.53 4.47 A 8 11.8 , 0, 0, 1, 11.47 8.05 A 8 8.8, 0, 0, 1, 4.17 8.05 A 8 11.8 , 0, 0, 1, 1.11 4.47 L 1.11 0.2 z"
                    data-area="[3, 7, 12, 17, 22]"
                />

                <path
                    id="distance-E"
                    class="court-segment-distance"
                    stroke-linejoin="round"
                    d="M 0.2 4.83 L 0.2 14.525 L 15.44 14.525 L 15.44 4.83 A 8 11.8 , 0, 0, 1, 11.92 8.85 A 8 8, 0, 0, 1,  3.72 8.85 A 8 11.8 , 0, 0, 1, 0.2 4.83"
                    data-area="[8, 13, 18]"
                />
           
   `;

        courtDistancesColored.setAttribute("fill", "rgba(150,150,150, 0.5");
        courtDistancesColored.setAttribute("stroke-width", "0.15px");
        courtDistancesColored.setAttribute("stroke", "rgb(140,200,200)");

        for (
            let index = 0;
            index < courtDistancesColored.children.length;
            index++
        ) {
            const area = JSON.parse(
                courtDistancesColored.children[index].dataset.area
            );

            const [makes, shots] = caclArea(state.selectedPlayerId, area);

            coloringSegments(
                courtDistancesColored.children[index],
                (makes / shots) * 100
            );

            addToolTip(courtDistancesColored.children[index], makes, shots);
        }
    }

    render();

    subscribe(render);

    return courtDistancesColored;
}

export function renderCourtSidesColored() {
    const courtSidesColored = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g"
    );

    function render() {
        courtSidesColored.innerHTML = "";

        courtSidesColored.innerHTML = `
                <path
                    id="side-left"
                    class="court-segment-angel"
                    stroke-linejoin="round"
                    d="M 0.2 0.2 L 0.2 14.525 L 7.82 1.8 L 7.82 0.2 z"
                    data-area="[0, 1, 2, 3, 4, 5, 6, 7, 8]"
                    
                />
                <path
                    id="side-middle"
                    class="court-segment-angel"
                    stroke-linejoin="round"
                    d="M 0.2 14.525 L 7.82 1.80 L 15.44 14.525 z"
                    data-area="[9, 10, 11, 12, 13]"
                />
                <path
                    id="side-right"
                    class="court-segment-angel"
                    stroke-linejoin="round"
                    d="M7.82 0.2  L 7.82 1.8 L 15.44 14.525 L 15.44 0.2  z"
                    data-area="[14, 15, 16, 17, 18, 19, 20, 21, 22]"
                />
            `;

        courtSidesColored.setAttribute("fill", "rgba(150,150,150, 0.5");
        courtSidesColored.setAttribute("stroke-width", "0.15px");
        courtSidesColored.setAttribute("stroke", "rgb(140,200,200)");

        for (
            let index = 0;
            index < courtSidesColored.children.length;
            index++
        ) {
            const area = JSON.parse(
                courtSidesColored.children[index].dataset.area
            );

            const [makes, shots] = caclArea(state.selectedPlayerId, area);

            coloringSegments(
                courtSidesColored.children[index],
                (makes / shots) * 100
            );

            addToolTip(courtSidesColored.children[index], makes, shots);
        }
    }

    render();

    subscribe(render);

    return courtSidesColored;
}
