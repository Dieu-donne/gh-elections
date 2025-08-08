"use client";
import { useCallback } from "react";

export default function ParlTab() {
      const mySearch = useCallback((e) => {
        const filter = e.target.value.toUpperCase();
        const table = document.getElementById("myTable");
        const trs   = table.getElementsByTagName("tr");
        for (let i = 0; i < trs.length; i++) {
        const td = trs[i].getElementsByTagName("td")[0];
        if (!td) continue;
        const txt = (td.textContent || td.innerText).toUpperCase();
        trs[i].style.display = txt.includes(filter) ? "" : "none";
        }
    }, []);
    function sortTable(n) {
        var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
        table = document.getElementById("myTable");
        switching = true;
        dir = "asc"; 
        while (switching) {
        switching = false;
        rows = table.rows;
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[n];
            y = rows[i + 1].getElementsByTagName("TD")[n];
            if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
            } else {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchcount++;
        } else if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
        }
        }
    };
  return (
    <>
        <div className="col-12">
        <h4 className="color-green">Parliamentary Results</h4>
        <p className="color-black mb-0 text-left">
            NPP to NDC Flip - Green <b>(49)</b>
        </p>
        <p className="color-black mb-2 text-left">
            NDC to NPP Flip - Blue <b>(5)</b>
        </p>
        <input
            className="form-control form-control-lg form-control-solid mb-3"
            type="text"
            id="myInput"
            onKeyUp={mySearch}
            placeholder="Search for constituencies"
            title="Type in a name"
        />
        <div className="table-responsive">
            <table
            className="table table-hover table-rounded table-striped border gy-7 gs-7 text-uppercase"
            id="myTable"
            >
            <thead role="button">
                <tr className="fw-semibold fs-6 text-gray-800 border-bottom-2 border-gray-200">
                <th onClick="sortTable(0)">
                    Constituency Name
                    <i className="uil uil-sort" />
                </th>
                <th onClick="sortTable(1)">
                    Region
                    <i className="uil uil-sort" />
                </th>
                <th onClick="sortTable(2)">
                    Elected MP (2024)
                    <i className="uil uil-sort" />
                </th>
                <th>Previous MP (2020)</th>
                </tr>
            </thead>
            <tbody>
                {/*ahafo*/}
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td> Asunafo North</td>
                <td> Ahafo Region</td>
                <td> MOHAMMED HARUNA (NDC)</td>
                <td> EVANS BOBIE OPOKU (NPP)</td>
                </tr>
                <tr>
                <td> Asunafo South</td>
                <td> Ahafo Region</td>
                <td> OPOKU ERIC (NDC)</td>
                <td> OPOKU ERIC (NDC)</td>
                </tr>
                <tr>
                <td> Asutifi North</td>
                <td> Ahafo Region</td>
                <td> PATRICK BANOR (NPP)</td>
                <td> PATRICK BANOR (NPP)</td>
                </tr>
                <tr>
                <td> Asutifi South</td>
                <td> Ahafo Region</td>
                <td>COLLINS DAUDA (NDC) </td>
                <td>COLLINS DAUDA (NDC) </td>
                </tr>
                <tr>
                <td> Tano North</td>
                <td> Ahafo Region</td>
                <td> DR. GIDEON BOAKO (NPP)</td>
                <td> FREDA PREMPEH (NPP)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td> Tano South</td>
                <td> Ahafo Region</td>
                <td>CHARLES ASIEDU (NDC)</td>
                <td> BENJAMIN SEKYERE YEBOAH (NPP)</td>
                </tr>
                {/*Ashanti*/}
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td> Adansi-Asokwa</td>
                <td> Ashanti Region</td>
                <td>Godwin Animli Dorgbadzi-dorani (NDC)</td>
                <td>Kobina Tahir Hammond (NPP)</td>
                </tr>
                <tr>
                <td> Fomena </td>
                <td> Ashanti Region</td>
                <td> Andrew Asiamah Amoako (NPP)</td>
                <td> Andrew Asiamah Amoako (IND)</td>
                </tr>
                <tr>
                <td> New Edubease</td>
                <td> Ashanti Region</td>
                <td>ABDUL - SALAM ADAMS (NDC) </td>
                <td>ABDUL - SALAM ADAMS (NDC) </td>
                </tr>
                <tr>
                <td> Afigya Kwabre North </td>
                <td> Ashanti Region</td>
                <td> Collins Adomako-Mensah (NPP)</td>
                <td> Collins Adomako-Mensah (NPP)</td>
                </tr>
                <tr>
                <td> Afigya Kwabre South </td>
                <td> Ashanti Region</td>
                <td>DAMATA AMA APPIANIMAA SALAM (NPP) </td>
                <td> William Owuraku Aidoo (NPP)</td>
                </tr>
                <tr>
                <td> Ahafo Ano North </td>
                <td> Ashanti Region</td>
                <td> ERIC NANA AGYEMANG-PREMPEH (NPP)</td>
                <td> Suleman Adamu Sanid (NPP)</td>
                </tr>
                <tr>
                <td> Ahafo Ano South East </td>
                <td> Ashanti Region</td>
                <td>YAKUBU MOHAMMED (NDC) </td>
                <td> Francis Manu-Adabor (NPP)</td>
                </tr>
                <tr>
                <td> Ahafo Ano South West </td>
                <td> Ashanti Region</td>
                <td> OSEI MENSAH DAPAAH ELVIS (NPP)</td>
                <td> Johnson Kwaku Adu (NPP)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td> Akrofuom </td>
                <td> Ashanti Region</td>
                <td>Joseph Azumah(NDC) </td>
                <td>ALEX BLANKSON(NPP) </td>
                </tr>
                <tr>
                <td> Odotobri </td>
                <td> Ashanti Region</td>
                <td>ANTHONY MMIEH (NPP) </td>
                <td> Emmanuel Akwasi Gyamfi (NPP)</td>
                </tr>
                <tr>
                <td> Manso Nkwanta </td>
                <td> Ashanti Region</td>
                <td>Tweneboa Kodua Fokuo (NPP)</td>
                <td> George Kwabena Obeng Takyi (NPP)</td>
                </tr>
                <tr>
                <td> Manso Edubia </td>
                <td> Ashanti Region</td>
                <td> Frimpong Yaw Addo (NPP)</td>
                <td> Frimpong Yaw Addo (NPP)</td>
                </tr>
                <tr>
                <td> Asante Akim Central </td>
                <td> Ashanti Region</td>
                <td> Kwame Anyimadu - Antwi (NPP)</td>
                <td> Kwame Anyimadu - Antwi (NPP)</td>
                </tr>
                <tr>
                <td> Asante Akim North </td>
                <td> Ashanti Region</td>
                <td> OHENE KWAME FRIMPONG (IND)</td>
                <td> Andy Kwame Appiah-Kubi (NPP)</td>
                </tr>
                <tr>
                <td> Asante Akim South</td>
                <td> Ashanti Region</td>
                <td> Kwaku Asante-Boateng (NPP)</td>
                <td> Kwaku Asante-Boateng (NPP)</td>
                </tr>
                <tr>
                <td> Asawase </td>
                <td> Ashanti Region</td>
                <td>MUNTAKA MOHAMMED-MUBARAK (NDC) </td>
                <td>Mubarak Mohammed Muntaka (NDC) </td>
                </tr>
                <tr>
                <td> Asokwa </td>
                <td> Ashanti Region</td>
                <td> Patricia Appiagyei (NPP)</td>
                <td> Patricia Appiagyei (NPP)</td>
                </tr>
                <tr>
                <td> Atwima-Kwanwoma </td>
                <td> Ashanti Region</td>
                <td> Kofi Amankwa-Manu (NPP)</td>
                <td> Kofi Amankwa-Manu (NPP)</td>
                </tr>
                <tr>
                <td> Atwima Mponua </td>
                <td> Ashanti Region</td>
                <td>SETH OSEI-AKOTO (NPP) </td>
                <td> Isaac Kwame Asiamah (NPP)</td>
                </tr>
                <tr>
                <td> Atwima-Nwabiagya South </td>
                <td> Ashanti Region</td>
                <td> SHIRLEY KYEI (NPP)</td>
                <td> Emmanuel Adjei Anhwere (NPP)</td>
                </tr>
                <tr>
                <td> Atwima-Nwabiagya North </td>
                <td> Ashanti Region</td>
                <td> FRANK YEBOAH (NPP)</td>
                <td> Benito Owusu Bio (NPP)</td>
                </tr>
                <tr>
                <td> Bekwai </td>
                <td> Ashanti Region</td>
                <td> RALPH POKU-ADUSEI (NPP)</td>
                <td> Joseph Osei-Owusu (NPP)</td>
                </tr>
                <tr>
                <td> Bosome-Freho </td>
                <td> Ashanti Region</td>
                <td> NANA ASAFO-ADJEI AYEH (NPP)</td>
                <td> AKWASI DARKO BOATENG (NPP)</td>
                </tr>
                <tr>
                <td> Bosomtwe </td>
                <td> Ashanti Region</td>
                <td>Dr. Yaw Osei Adutwum (NPP)</td>
                <td>Dr. Yaw Osei Adutwum (NPP)</td>
                </tr>
                <tr>
                <td> Ejisu</td>
                <td> Ashanti Region</td>
                <td> KWABENA BOATENG (NPP)</td>
                <td>John Ampotuah Kumah (NPP) </td>
                </tr>
                <tr>
                <td> Ejura-Sekyedumase</td>
                <td> Ashanti Region</td>
                <td> Muhammad Bawah Braimah (NDC) </td>
                <td> Muhammad Bawah Braimah (NDC) </td>
                </tr>
                <tr>
                <td> Juaben</td>
                <td> Ashanti Region</td>
                <td>Francis Kwabena Berepong Owusu-akyaw (NPP) </td>
                <td>AMA POMAA BOATENG (NPP) </td>
                </tr>
                <tr>
                <td> Bantama </td>
                <td> Ashanti Region</td>
                <td> FRANCIS ASENSO-BOAKYE (NPP)</td>
                <td> FRANCIS ASENSO-BOAKYE (NPP)</td>
                </tr>
                <tr>
                <td> Manhyia North </td>
                <td> Ashanti Region</td>
                <td> AKWASI KONADU (NPP)</td>
                <td> Akwasi Konadu (NPP)</td>
                </tr>
                <tr>
                <td> Manhyia South </td>
                <td> Ashanti Region</td>
                <td> NANA AGYEI BAFFOUR AWUAH (NPP)</td>
                <td> Matthew Opoku Prempeh (NPP)</td>
                </tr>
                <tr>
                <td> Nhyiaeso </td>
                <td> Ashanti Region</td>
                <td>STEPHEN AMOAH (NPP) </td>
                <td> Stephen Amoah (NPP)</td>
                </tr>
                <tr>
                <td> Subin </td>
                <td> Ashanti Region</td>
                <td>KOFI OBIRI YEBOAH (NPP) </td>
                <td> Eugene Boakye Antwi (NPP)</td>
                </tr>
                <tr>
                <td> Kwabre East </td>
                <td> Ashanti Region</td>
                <td>ONYINA-ACHEAMPONG AKWASI GYAMFI (NPP)</td>
                <td> Francisca Oteng Mensah (NPP)</td>
                </tr>
                <tr>
                <td> Kwadaso </td>
                <td> Ashanti Region</td>
                <td>KINGSLEY NYARKO (NPP) </td>
                <td> Kingsley Nyarko (NPP)</td>
                </tr>
                <tr>
                <td> Mampong </td>
                <td> Ashanti Region</td>
                <td> KWAKU AMPRATWUM-SARPONG (NPP)</td>
                <td>Kingsley Nyarko (NPP) </td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td> Obuasi East </td>
                <td> Ashanti Region</td>
                <td>SAMUEL ABOAGYE (NDC) </td>
                <td> Patrick Boakye-Yiadom (NPP)</td>
                </tr>
                <tr>
                <td> Obuasi West </td>
                <td> Ashanti Region</td>
                <td>KWAKU AGYEMAN KWARTENG (NPP) </td>
                <td>Kwaku Agyemang Kwarteng (NPP) </td>
                </tr>
                <tr>
                <td> Offinso South </td>
                <td> Ashanti Region</td>
                <td> Isaac Yaw Opoku (NPP)</td>
                <td> Isaac Yaw Opoku (NPP)</td>
                </tr>
                <tr>
                <td> Offinso North </td>
                <td> Ashanti Region</td>
                <td>FRED KYEI ASAMOAH (NPP) </td>
                <td> Augustine Collins Ntim (NPP)</td>
                </tr>
                <tr>
                <td> Oforikrom </td>
                <td> Ashanti Region</td>
                <td>MICHAEL KWASI AIDOO (NPP) </td>
                <td>Emmanuel Marfo (NPP) </td>
                </tr>
                <tr>
                <td> Old Tafo </td>
                <td> Ashanti Region</td>
                <td> VINCENT EKWOW ASSAFUAH (NPP)</td>
                <td> Vincent Ekow Assafuah (NPP)</td>
                </tr>
                <tr>
                <td> Sekyere Afram Plains </td>
                <td> Ashanti Region</td>
                <td> NASIRA AFRAH GYEKYE (NDC)</td>
                <td> ALEX ADOMAKO-MENSAH (NDC)</td>
                </tr>
                <tr>
                <td> Nsuta-Kwamang </td>
                <td> Ashanti Region</td>
                <td> ADELAIDE NTIM (NPP)</td>
                <td> ADELAIDE NTIM (NPP)</td>
                </tr>
                <tr>
                <td> Afigya Sekyere East </td>
                <td> Ashanti Region</td>
                <td> Mavis Nkansah Boadu (NPP)</td>
                <td> Mavis Nkansah Boadu (NPP)</td>
                </tr>
                <tr>
                <td> Kumawu </td>
                <td> Ashanti Region</td>
                <td> ERNEST YAW ANIM (NPP)</td>
                <td> Philip Basoah (NPP)</td>
                </tr>
                <tr>
                <td> Effiduase-Asokore </td>
                <td> Ashanti Region</td>
                <td> DR. NANA AYEW AFRIYE (NPP) </td>
                <td> Nana Ayew Afriyie (NPP)</td>
                </tr>
                <tr>
                <td> Suame </td>
                <td> Ashanti Region</td>
                <td> JOHN DARKO (NPP)</td>
                <td> Osei Kyei Mensah Bonsu (NPP) </td>
                </tr>
                {/*Bono*/}
                <tr>
                <td> Banda Ahenkro </td>
                <td> Bono Region</td>
                <td> Ahmed Ibrahim (NDC)</td>
                <td> Ahmed Ibrahim (NDC)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td> Berekum East </td>
                <td> Bono Region</td>
                <td> AMPAABENG KYEREMEH SIMON (NDC)</td>
                <td> Nelson Kyeremeh (NPP)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td> Berekum West </td>
                <td> Bono Region</td>
                <td> DICKSON KYERE-DUAH (NDC)</td>
                <td> Kwaku Agyenim-Boateng (NPP)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td> Dormaa Central </td>
                <td> Bono Region</td>
                <td> JOHN KWAME ADU JACK (NDC)</td>
                <td>Kwaku Agyeman-Manu (NPP) </td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td> Dormaa East </td>
                <td> Bono Region</td>
                <td> OWUSUAH RACHEL AMMA (NDC)</td>
                <td> Paul Apreku Twum Barimah (NPP)</td>
                </tr>
                <tr>
                <td> Dormaa West </td>
                <td> Bono Region</td>
                <td> VINCENT OPPONG ASAMOAH (NDC)</td>
                <td> VINCENT OPPONG ASAMOAH (NDC)</td>
                </tr>
                <tr>
                <td> Jaman North </td>
                <td> Bono Region</td>
                <td> AHENKWAH FREDERICK YAW (NDC)</td>
                <td> AHENKWAH FREDERICK YAW (NDC)</td>
                </tr>
                <tr>
                <td> Jaman South </td>
                <td> Bono Region</td>
                <td> KWADWO DAMOAH (NPP)</td>
                <td> Williams Okofo-Dateh (NDC)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td> Sunyani East </td>
                <td> Bono Region</td>
                <td> SEID MUBARAK (NDC)</td>
                <td> Kwasi Ameyaw Cheremeh (NPP)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td> Sunyani West </td>
                <td> Bono Region</td>
                <td> MILLICENT YEBOAH AMANKWAH (NDC)</td>
                <td> Ignatius Baffour Awuah (NPP)</td>
                </tr>
                <tr>
                <td> Tain </td>
                <td> Bono Region</td>
                <td> Adama Sulemana (NDC)</td>
                <td> Adama Sulemana (NDC)</td>
                </tr>
                <tr>
                <td> Wenchi </td>
                <td> Bono Region</td>
                <td>HARUNA SEIDU (NDC) </td>
                <td> Haruna Seidu (NDC)</td>
                </tr>
                {/*Bono East*/}
                <tr>
                <td>Atebubu-Amantin </td>
                <td> Bono East Region</td>
                <td>SANJA NANJA (NDC) </td>
                <td>SANJA NANJA (NDC) </td>
                </tr>
                <tr>
                <td>Kintampo North </td>
                <td> Bono East Region</td>
                <td>JOSEPH KWAME KUMAH (NDC) </td>
                <td>JOSEPH KWAME KUMAH (NDC) </td>
                </tr>
                <tr>
                <td>Kintampo South </td>
                <td> Bono East Region</td>
                <td> FELICIA ADJEI (NDC)</td>
                <td> Alexander Gyan (NPP)</td>
                </tr>
                <tr>
                <td>Nkoranza North </td>
                <td> Bono East Region</td>
                <td> MENSAH KWASI JOSEPH (NDC)</td>
                <td> MENSAH KWASI JOSEPH (NDC)</td>
                </tr>
                <tr>
                <td>Nkoranza South </td>
                <td> Bono East Region</td>
                <td>Emmanuel Kwadwo Agyekum (NDC) </td>
                <td>Emmanuel Kwadwo Agyekum (NDC) </td>
                </tr>
                <tr>
                <td>Pru East </td>
                <td> Bono East Region</td>
                <td>EMMANUEL KWAKU BOAM (NDC) </td>
                <td> Kwabena Donkor (NDC)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Pru West </td>
                <td> Bono East Region</td>
                <td> EMMANUEL KOFI NTEKUNI (NDC)</td>
                <td> Stephen Jalulah (NPP)</td>
                </tr>
                <tr>
                <td>Sene East </td>
                <td> Bono East Region</td>
                <td> Dominic Napare (NDC)</td>
                <td> Dominic Napare (NDC)</td>
                </tr>
                <tr>
                <td>Sene West </td>
                <td> Bono East Region</td>
                <td> KWAME TWUMASI AMPOFO (NDC)</td>
                <td> KWAME TWUMASI AMPOFO (NDC)</td>
                </tr>
                <tr>
                <td>Techiman South </td>
                <td> Bono East Region</td>
                <td>Martin Kwaku Adjei-Mensah Korsah (NPP) </td>
                <td>Martin Kwaku Adjei-Mensah Korsah (NPP) </td>
                </tr>
                <tr>
                <td>Techiman North </td>
                <td> Bono East Region</td>
                <td> ELIZABETH OFOSU- ADJARE (NDC)</td>
                <td> ELIZABETH OFOSU- ADJARE (NDC)</td>
                </tr>
                {/*Central */}
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Abura-Asebu-Kwamankese </td>
                <td> Central Region</td>
                <td> FELIX KWAKYE OFOSU (NDC)</td>
                <td> Elvis Morris Donkoh (NPP)</td>
                </tr>
                <tr>
                <td>Agona East </td>
                <td> Central Region</td>
                <td> SAWYERR QUEENSTAR POKUAH (NDC)</td>
                <td> Queenstar Pokua Sawyerr (NDC) </td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Agona West </td>
                <td> Central Region</td>
                <td> DANGBEY ERNESTINA OFORI (NDC)</td>
                <td> Cynthia Mamle Morrison (NPP)</td>
                </tr>
                <tr>
                <td>Ajumako-Enyan-Essiam </td>
                <td> Central Region</td>
                <td>Forson Cassiel Ato Baah (NDC)</td>
                <td>Forson Cassiel Ato Baah (NDC)</td>
                </tr>
                <tr>
                <td>Asikuma-Odoben-Brakwa </td>
                <td> Central Region</td>
                <td>GHANSAH ALHASSAN KOBINA (NDC) </td>
                <td>GHANSAH ALHASSAN KOBINA (NDC) </td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Assin Central</td>
                <td> Central Region</td>
                <td>Migyimah Shaibu Nurein (NDC)</td>
                <td> Kennedy Ohene Agyapong (NPP)</td>
                </tr>
                <tr>
                <td>Assin North</td>
                <td> Central Region</td>
                <td> QUAYSON JAMES GYAKYE (NDC)</td>
                <td> QUAYSON JAMES GYAKYE (NDC)</td>
                </tr>
                <tr>
                <td> Assin South</td>
                <td> Central Region</td>
                <td> John Ntim Fordjour (NPP)</td>
                <td> John Ntim Fordjour (NPP)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Awutu-Senya East</td>
                <td> Central Region</td>
                <td>Phillis Naa Koryoo Okunnor (NDC)</td>
                <td> Mavis Hawa Koomson (NPP)</td>
                </tr>
                <tr>
                <td>Awutu-Senya West</td>
                <td> Central Region</td>
                <td> Gizella Tetteh Agbotui (NDC)</td>
                <td> Gizella Tetteh Agbotui (NDC)</td>
                </tr>
                <tr>
                <td>Cape Coast North</td>
                <td> Central Region</td>
                <td>NYARKU KWAMENA MINTA (NDC) </td>
                <td>NYARKU KWAMENA MINTA (NDC) </td>
                </tr>
                <tr>
                <td>Cape Coast South</td>
                <td> Central Region</td>
                <td>RICKETTS-HAGAN GEORGE KWEKU (NDC) </td>
                <td>RICKETTS-HAGAN GEORGE KWEKU (NDC) </td>
                </tr>
                <tr>
                <td>Effutu</td>
                <td> Central Region</td>
                <td>Alexander Afenyo-Markin (NPP) </td>
                <td>Alexander Afenyo-Markin (NPP) </td>
                </tr>
                <tr>
                <td>Ekumfi</td>
                <td> Central Region</td>
                <td>Kwainoe Ekow (NDC)</td>
                <td> Abeiku Crentsil (NDC)</td>
                </tr>
                <tr>
                <td> Gomoa East</td>
                <td> Central Region</td>
                <td>Desmond De-Graft Paitoo (NDC) </td>
                <td>Desmond De-Graft Paitoo (NDC) </td>
                </tr>
                <tr>
                <td> Gomoa Central</td>
                <td> Central Region</td>
                <td> Kwame Asare Obeng (IND) </td>
                <td> Naana Eyiah Quansah (NPP)</td>
                </tr>
                <tr>
                <td>Gomoa West</td>
                <td> Central Region</td>
                <td>Richard Gyan Mensah (NDC) </td>
                <td>Richard Gyan Mensah (NDC) </td>
                </tr>
                <tr>
                <td>Komenda-Edina-Eguafo-Abirem</td>
                <td> Central Region</td>
                <td>SAMUEL ATTA MILLS (NDC) </td>
                <td>SAMUEL ATTA MILLS (NDC) </td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td> Mfantseman</td>
                <td> Central Region</td>
                <td>ARHIN EBENEZER PRINCE (NDC) </td>
                <td> Ophelia Hayford (NPP)</td>
                </tr>
                <tr>
                <td>Twifo-Atii Morkwaa</td>
                <td> Central Region</td>
                <td>VONDEE T.D. DAVID (NDC) </td>
                <td>VONDEE T.D. DAVID (NDC) </td>
                </tr>
                <tr>
                <td>Hemang Lower Denkyira</td>
                <td> Central Region</td>
                <td> Lawrence Agyinsam (NPP)</td>
                <td>Bright Wireko Brobbey (NPP) </td>
                </tr>
                <tr>
                <td>Upper Denkyira East</td>
                <td> Central Region</td>
                <td> ANKOMAH EMELIA (NDC)</td>
                <td> Festus Awuah Kwofie (NPP)</td>
                </tr>
                <tr style={{ backgroundColor: "#0B2B7A", color: "#fff" }}>
                <td>Upper Denkyira West</td>
                <td> Central Region</td>
                <td> RUDOLF AMOAKO-GYAMPAH (NPP)</td>
                <td> Daniel Ohene Darko (NDC)</td>
                </tr>
                {/*Eastern */}
                <tr>
                <td>Abuakwa North</td>
                <td> Eastern Region</td>
                <td> ADDO-FREMPONG NANA AMPAW KWAME (NPP)</td>
                <td> Gifty Twum Ampofo (NPP)</td>
                </tr>
                <tr>
                <td> Abuakwa South</td>
                <td> Eastern Region</td>
                <td> KINGSLEY AGYEMANG (NPP)</td>
                <td> Samuel Atta Akyea (NPP)</td>
                </tr>
                <tr>
                <td> Achiase</td>
                <td> Eastern Region</td>
                <td> Kofi Ahenkorah Marfo (NPP)</td>
                <td> Kofi Ahenkorah Marfo (NPP)</td>
                </tr>
                <tr>
                <td>Akropong</td>
                <td> Eastern Region</td>
                <td> SAMUEL AWUKU (NPP)</td>
                <td> SAMUEL AWUKU (NPP)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Akwapim South</td>
                <td> Eastern Region</td>
                <td>Lawrencia Dziwornu (NDC)</td>
                <td> Osei Bonsu Amoah (NPP)</td>
                </tr>
                <tr>
                <td>Ofoase-Ayirebi</td>
                <td> Eastern Region</td>
                <td> KOJO OPPONG NKRUMAH (NPP)</td>
                <td> KOJO OPPONG NKRUMAH (NPP)</td>
                </tr>
                <tr>
                <td>Asene Akroso Manso</td>
                <td> Eastern Region</td>
                <td> George Kwame Aboagye (NPP)</td>
                <td> George Kwame Aboagye (NPP)</td>
                </tr>
                <tr>
                <td>Asuogyaman</td>
                <td> Eastern Region</td>
                <td>THOMAS AMPEM NYARKO (NDC) </td>
                <td>THOMAS AMPEM NYARKO (NDC) </td>
                </tr>
                <tr>
                <td>Atiwa East</td>
                <td> Eastern Region</td>
                <td> ABENA OSEI-ASARE (NPP)</td>
                <td> ABENA OSEI-ASARE (NPP)</td>
                </tr>
                <tr>
                <td>Atiwa West</td>
                <td> Eastern Region</td>
                <td> LAURETTE KORKOR ASANTE (NPP)</td>
                <td>Kwesi Amoako Atta (NPP) </td>
                </tr>
                <tr style={{ backgroundColor: "#0B2B7A", color: "#fff" }}>
                <td>Ayensuano</td>
                <td> Eastern Region</td>
                <td> IDA ADJOA ASIEDU (NPP)</td>
                <td> Teddy Safori Addi (NDC)</td>
                </tr>
                <tr>
                <td>Akim Oda</td>
                <td> Eastern Region</td>
                <td> Alexander Akwasi Acquah (NPP)</td>
                <td> Alexander Akwasi Acquah (NPP)</td>
                </tr>
                <tr>
                <td>Abirem</td>
                <td> Eastern Region</td>
                <td> CHARLES ASUAKO OWIREDU (NPP)</td>
                <td> John Frimpong Osei (NPP)</td>
                </tr>
                <tr>
                <td> Akim Swedru</td>
                <td> Eastern Region</td>
                <td>OSEI KENNEDY NYARKO (NPP) </td>
                <td>OSEI KENNEDY NYARKO (NPP) </td>
                </tr>
                <tr>
                <td> Akwatia</td>
                <td> Eastern Region</td>
                <td> ERNEST KUMI (NPP)</td>
                <td> Henry Yiadom Boakye (NDC)</td>
                </tr>
                <tr>
                <td>Fanteakwa North</td>
                <td> Eastern Region</td>
                <td> KWAME APPIAH KODUA (NPP)</td>
                <td>Kwabena Amankwa Asiamah (NPP) </td>
                </tr>
                <tr>
                <td>Fanteakwa South</td>
                <td> Eastern Region</td>
                <td>DUKE WILLIAM ALLEN KWAME AMOAKO-ATTA (NPP) </td>
                <td> Kofi Okyere-Agyekum (NPP)</td>
                </tr>
                <tr>
                <td>Kade </td>
                <td> Eastern Region</td>
                <td> Alexander Agyare (NPP)</td>
                <td> Alexander Agyare (NPP)</td>
                </tr>
                <tr>
                <td>Afram Plains North</td>
                <td> Eastern Region</td>
                <td> Worlasi Kpeli (IND)</td>
                <td>Betty Crosby Mensah (NDC) </td>
                </tr>
                <tr>
                <td>Afram Plains South</td>
                <td> Eastern Region</td>
                <td> JOSEPH APPIAH BOATENG (NDC)</td>
                <td> JOSEPH APPIAH BOATENG (NDC)</td>
                </tr>
                <tr>
                <td>Abetifi</td>
                <td> Eastern Region</td>
                <td>Bryan Acheampong (NPP)</td>
                <td>Bryan Acheampong (NPP)</td>
                </tr>
                <tr>
                <td>Mpraeso</td>
                <td> Eastern Region</td>
                <td>DAVIS ANSAH OPOKU (NPP) </td>
                <td>DAVIS ANSAH OPOKU (NPP) </td>
                </tr>
                <tr>
                <td>Nkawkaw</td>
                <td> Eastern Region</td>
                <td> Joseph Frempong (NPP) </td>
                <td> Joseph Frempong (NPP) </td>
                </tr>
                <tr>
                <td>Lower Manya</td>
                <td> Eastern Region</td>
                <td>EBENEZER OKLETEY TERLABI (NDC) </td>
                <td>EBENEZER OKLETEY TERLABI (NDC) </td>
                </tr>
                <tr>
                <td>New Juaben North</td>
                <td> Eastern Region</td>
                <td> NANA OSEI-ADJEI (NPP)</td>
                <td> Kwasi Boateng Adjei (NPP)</td>
                </tr>
                <tr>
                <td>New Juaben South</td>
                <td> Eastern Region</td>
                <td> MICHAEL OKYERE BAAFI (NPP)</td>
                <td> MICHAEL OKYERE BAAFI (NPP)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Nsawam Adoagyiri</td>
                <td> Eastern Region</td>
                <td> Philibert Amenorpe (NDC)</td>
                <td> Frank Annoh-Dompreh (NPP)</td>
                </tr>
                <tr>
                <td>Okere</td>
                <td> Eastern Region</td>
                <td> DANIEL NANA ADDO-KENNETH (NPP)</td>
                <td> Daniel Botwe (NPP)</td>
                </tr>
                <tr>
                <td> Suhum</td>
                <td> Eastern Region</td>
                <td>FRANK ASEIDU BEKOE (NPP) </td>
                <td> Kwadjo Asante (NPP)</td>
                </tr>
                <tr>
                <td>Upper Manya</td>
                <td> Eastern Region</td>
                <td> BISMARK TETTEH NYARKO (NDC)</td>
                <td> BISMARK TETTEH NYARKO (NDC)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Upper West Akim</td>
                <td> Eastern Region</td>
                <td>DRAH EMMANUEL (NDC) </td>
                <td> Frederick Obeng Adom (NPP)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Lower West Akim</td>
                <td> Eastern Region</td>
                <td> OWEN KWAME FRIMPONG (NDC)</td>
                <td> Charles Acheampong (NPP)</td>
                </tr>
                <tr>
                <td>Yilo Krobo</td>
                <td> Eastern Region</td>
                <td> Albert Tetteh Nyakotey (NDC)</td>
                <td> Albert Tetteh Nyakotey (NDC)</td>
                </tr>
                {/*Greater Accra */}
                <tr>
                <td>Ablekuma Central</td>
                <td> Greater Accra Region</td>
                <td>ABDUL-LATIF DAN (NDC) </td>
                <td>ABDUL-LATIF DAN (NDC) </td>
                </tr>
                <tr>
                <td> Ablekuma North</td>
                <td> Greater Accra Region</td>
                <td> </td>
                <td> Sheila Bartels (NPP)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Ablekuma West</td>
                <td> Greater Accra Region</td>
                <td> KWEKU ADDO (NDC)</td>
                <td> Ursula G Owusu (NPP)</td>
                </tr>
                <tr>
                <td>Ablekuma South</td>
                <td> Greater Accra Region</td>
                <td> ALFRED OKOE VANDERPUIJE (NDC)</td>
                <td> Alfred Okoe Vanderpuije (NDC)</td>
                </tr>
                <tr>
                <td>Odododiodio</td>
                <td> Greater Accra Region</td>
                <td>ALFRED NII KOTEY ASHIE (NDC)</td>
                <td> Edwin Nii Lante Vanderpuye (NDC)</td>
                </tr>
                <tr>
                <td>Okaikwei Central</td>
                <td> Greater Accra Region</td>
                <td>Patrick Yaw Boamah (NPP) </td>
                <td>Patrick Yaw Boamah (NPP) </td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Okaikwei South</td>
                <td> Greater Accra Region</td>
                <td>ERNEST ADOMAKO (NDC) </td>
                <td> Dakoa Newman (NPP)</td>
                </tr>
                <tr>
                <td>Ada</td>
                <td> Greater Accra Region</td>
                <td>COMFORT DOYOE CUDJOE (NDC)</td>
                <td>Comfort Doyoe Cudjoe-Ghansah (NDC) </td>
                </tr>
                <tr>
                <td>Sege</td>
                <td> Greater Accra Region</td>
                <td> DANIEL KESHI BESSEY (NDC)</td>
                <td>Christian Corleytey Otuteye (NDC) </td>
                </tr>
                <tr>
                <td>Adenta</td>
                <td> Greater Accra Region</td>
                <td> MOHAMMED ADAMU RAMADAN (NDC) </td>
                <td> Mohammed Adamu Ramadan (NDC)</td>
                </tr>
                <tr>
                <td>Ashaiman</td>
                <td> Greater Accra Region</td>
                <td>ERNEST HENRY NORGBEY (NDC) </td>
                <td>ERNEST HENRY NORGBEY (NDC) </td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Ayawaso Central</td>
                <td> Greater Accra Region</td>
                <td>Abdul Rauf Tongym Tubazu (NDC)</td>
                <td> Henry Quartey (NPP) </td>
                </tr>
                <tr>
                <td>Ayawaso East</td>
                <td> Greater Accra Region</td>
                <td> MAHAMA NASER TOURE (NDC) </td>
                <td>Naser Toure Mahama (NDC) </td>
                </tr>
                <tr>
                <td>Ayawaso North</td>
                <td> Greater Accra Region</td>
                <td> Yussif Issaka Jajah (NDC)</td>
                <td> Yussif Issaka Jajah (NDC)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Ayawaso West</td>
                <td> Greater Accra Region</td>
                <td> JOHN SETOR DUMELO (NDC) </td>
                <td> Lydia Alhassan (NPP)</td>
                </tr>
                <tr>
                <td>Anyaa-Sowutuom</td>
                <td> Greater Accra Region</td>
                <td>EMMANUEL TOBBIN (NPP) </td>
                <td> Dickson Adomako Kissi (NPP)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Dome-Kwabenya</td>
                <td> Greater Accra Region</td>
                <td> AKURUGU FAUSTINA ELIKPLIM (NDC)</td>
                <td> Sarah Adwoa Safo (NPP)</td>
                </tr>
                <tr>
                <td>Trobu</td>
                <td> Greater Accra Region</td>
                <td> GLORIA OWUSU (NPP)</td>
                <td> Moses Anim (NPP)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Bortianor-Ngleshie-Amanfrom</td>
                <td> Greater Accra Region</td>
                <td> OKLE FELIX AKWETEY (NDC)</td>
                <td>Sylvester Tetteh (NPP) </td>
                </tr>
                <tr>
                <td>Domeabra-Obom</td>
                <td> Greater Accra Region</td>
                <td> ISAAC AWUKU YIBOR (NDC)</td>
                <td> Sophia Karen Edem Ackuaku (NDC)</td>
                </tr>
                <tr>
                <td>Amasaman</td>
                <td> Greater Accra Region</td>
                <td> SEDEM KWAKU AFENYO (NDC)</td>
                <td> Akwasi Owusu Afrifa-Mensa (NPP)</td>
                </tr>
                <tr>
                <td>Korle Klottey</td>
                <td> Greater Accra Region</td>
                <td>ZANETOR AGYEMAN-RAWLINGS (NDC) </td>
                <td>ZANETOR AGYEMAN-RAWLINGS (NDC) </td>
                </tr>
                <tr>
                <td>Kpone-Katamanso</td>
                <td> Greater Accra Region</td>
                <td> JOSEPH AKUERTEH TETTEY (NDC)</td>
                <td> JOSEPH AKUERTEH TETTEY (NDC)</td>
                </tr>
                <tr>
                <td>Krowor</td>
                <td> Greater Accra Region</td>
                <td> AGNES NAA MOMO LARTEY (NDC)</td>
                <td> AGNES NAA MOMO LARTEY (NDC)</td>
                </tr>
                <tr>
                <td>Dade Kotopon</td>
                <td> Greater Accra Region</td>
                <td> Rita Naa Odoley Sowah (NDC)</td>
                <td> Rita Naa Odoley Sowah (NDC)</td>
                </tr>
                <tr>
                <td>Abokobi-Madina</td>
                <td> Greater Accra Region</td>
                <td> Francis-Xavier Kojo Sosu (NDC)</td>
                <td> Francis-Xavier Kojo Sosu (NDC)</td>
                </tr>
                <tr>
                <td>Ledzokuku</td>
                <td> Greater Accra Region</td>
                <td>AYIKU BENJAMIN NARTEH (NDC) </td>
                <td>AYIKU BENJAMIN NARTEH (NDC) </td>
                </tr>
                <tr>
                <td>Ningo-Prampram</td>
                <td> Greater Accra Region</td>
                <td>Samuel George Nartey (NDC) </td>
                <td>Samuel George Nartey (NDC) </td>
                </tr>
                <tr>
                <td>Okaikwei North</td>
                <td> Greater Accra Region</td>
                <td> THERESA LARDI AWUNI (NDC)</td>
                <td> THERESA LARDI AWUNI (NDC)</td>
                </tr>
                <tr>
                <td> Shai-Osudoku</td>
                <td> Greater Accra Region</td>
                <td>Linda Obenewaa Akweley Ocloo (NDC) </td>
                <td>Linda Obenewaa Akweley Ocloo (NDC) </td>
                </tr>
                <tr>
                <td>Tema Central</td>
                <td> Greater Accra Region</td>
                <td>CHARLES FORSON (NPP) </td>
                <td> Yves Hanson-Nortey (NPP) </td>
                </tr>
                <tr>
                <td>Tema East</td>
                <td> Greater Accra Region</td>
                <td>ODAMTTEN ISAAC ASHAI (NDC) </td>
                <td>ODAMTTEN ISAAC ASHAI (NDC) </td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Tema West</td>
                <td> Greater Accra Region</td>
                <td> JAMES ENU (NDC)</td>
                <td> Carlos Kingsley Ahenkora (NPP)</td>
                </tr>
                <tr>
                <td>Weija</td>
                <td> Greater Accra Region</td>
                <td>JERRY AHMED SHAIB (NPP) </td>
                <td> Tina Gifty Naa Ayeley Mensah (NPP)</td>
                </tr>
                {/*North East */}
                <tr>
                <td>Bunkpurugu</td>
                <td> North East Region</td>
                <td>BANDIM ABED-NEGO AZUMAH (NDC) </td>
                <td>BANDIM ABED-NEGO AZUMAH (NDC) </td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Chereponi </td>
                <td> North East Region</td>
                <td>SEIDU ALHASSAN ALAJOR (NDC) </td>
                <td> Abdul-Razak Tahidu (NPP) </td>
                </tr>
                <tr>
                <td>Nalerigu </td>
                <td> North East Region</td>
                <td> MUMUNI MUHAMMED (NPP)</td>
                <td>Issifu Seidu (NDC) </td>
                </tr>
                <tr>
                <td>Yagaba-Kubori </td>
                <td> North East Region</td>
                <td> MUSTAPHA USSIF (NPP)</td>
                <td> MUSTAPHA USSIF (NPP)</td>
                </tr>
                <tr>
                <td>Walewale </td>
                <td> North East Region</td>
                <td>MAHAMA TIAH ABDUL-KABIRU (NPP) </td>
                <td> Lariba Abudu (NPP)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Yunyoo </td>
                <td> North East Region</td>
                <td> ALHASSAN SULEMANA (NDC)</td>
                <td> Oscar Liwaal (NPP)</td>
                </tr>
                {/*Northern */}
                <tr>
                <td>Gushegu </td>
                <td> Northern Region</td>
                <td>ALHASSAN TAMPULI SULEMANA (NPP) </td>
                <td>ALHASSAN TAMPULI SULEMANA (NPP) </td>
                </tr>
                <tr>
                <td>Karaga </td>
                <td> Northern Region</td>
                <td>Mohammed Amin Adam (NPP) </td>
                <td>Mohammed Amin Adam (NPP) </td>
                </tr>
                <tr style={{ backgroundColor: "#0B2B7A", color: "#fff" }}>
                <td>Kpandai </td>
                <td> Northern Region</td>
                <td>MATTHEW NYINDAM (NPP)</td>
                <td> Daniel Nsala Wakpal (NDC)</td>
                </tr>
                <tr>
                <td>Kumbungu </td>
                <td> Northern Region</td>
                <td>HAMZA ADAM (NDC) </td>
                <td>HAMZA ADAM (NDC) </td>
                </tr>
                <tr>
                <td>Mion </td>
                <td> Northern Region</td>
                <td> MISBAHU MAHAMA ADAMS (NDC)</td>
                <td> Musah Abdul-Aziz Ayaba (NDC)</td>
                </tr>
                <tr>
                <td>Nanton </td>
                <td> Northern Region</td>
                <td>MOHAMMED SHERIF ABDUL-KHALIQ (NDC) </td>
                <td> Mohammed Hardi Tuferu (NPP)</td>
                </tr>
                <tr>
                <td>Bimbilla </td>
                <td> Northern Region</td>
                <td>Dominc Aduna Bingab Nitiwul (NPP) </td>
                <td>Dominc Aduna Bingab Nitiwul (NPP) </td>
                </tr>
                <tr>
                <td>Wulensi </td>
                <td> Northern Region</td>
                <td> Nandaya Yaw Stanley (IND)</td>
                <td>Abukari Dawuni (NPP) </td>
                </tr>
                <tr>
                <td>Saboba </td>
                <td> Northern Region</td>
                <td> Joseph Bukari Nikpe (NDC)</td>
                <td> Joseph Bukari Nikpe (NDC)</td>
                </tr>
                <tr>
                <td>Sagnarigu </td>
                <td> Northern Region</td>
                <td> ATTA ISSAH (NDC)</td>
                <td>Alhassan Bashir Fuseini (NDC) </td>
                </tr>
                <tr>
                <td>Savelugu </td>
                <td> Northern Region</td>
                <td> ABDUL AZIZ FATAHIYA (NPP)</td>
                <td> Jacob Iddriss Abdulai (NDC)</td>
                </tr>
                <tr>
                <td>Tamale Central </td>
                <td> Northern Region</td>
                <td> IBRAHIM MURTALA MUHAMMED (NDC) </td>
                <td> IBRAHIM MURTALA MUHAMMED (NDC) </td>
                </tr>
                <tr>
                <td>Tamale North </td>
                <td> Northern Region</td>
                <td> ALHASSAN SAYIBU SUHUYINI (NDC)</td>
                <td> ALHASSAN SAYIBU SUHUYINI (NDC)</td>
                </tr>
                <tr>
                <td>Tamale West/Tatale/Sanguli </td>
                <td> Northern Region</td>
                <td> NTEBE AYO WILLIAM (NDC)</td>
                <td> - </td>
                </tr>
                <tr>
                <td>Tamale South </td>
                <td> Northern Region</td>
                <td>Haruna Iddrisu (NDC) </td>
                <td>Haruna Iddrisu (NDC) </td>
                </tr>
                <tr>
                <td>Tolon </td>
                <td> Northern Region</td>
                <td>Habib Iddrisu (NPP) </td>
                <td>Habib Iddrisu (NPP) </td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Yendi </td>
                <td> Northern Region</td>
                <td> ABDUL-FATAWU ALHASSAN (NDC)</td>
                <td> Umar Farouk Aliu Mahama (NPP)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Zabzugu </td>
                <td> Northern Region</td>
                <td>ALHASSAN UMAR (NDC) </td>
                <td> John Bennam Jabaah (NPP)</td>
                </tr>
                {/*Oti */}
                <tr>
                <td>Guan (New Constituency) </td>
                <td> Oti Region</td>
                <td> Agbenyo Fred (NDC)</td>
                <td> - </td>
                </tr>
                <tr>
                <td>Biakoye </td>
                <td> Oti Region</td>
                <td> JEAN-MARIE FORMADI (NDC)</td>
                <td> Kwadwo Nyanpon Aboagye (NDC)</td>
                </tr>
                <tr>
                <td>Buem </td>
                <td> Oti Region</td>
                <td> Iddie Kofi Adams (NDC)</td>
                <td> Iddie Kofi Adams (NDC)</td>
                </tr>
                <tr>
                <td>Akan </td>
                <td> Oti Region</td>
                <td> GOMADO YAO (NDC)</td>
                <td> GOMADO YAO (NDC)</td>
                </tr>
                <tr>
                <td>Krachi East </td>
                <td> Oti Region</td>
                <td> NELSON KOFI DJABAB (NDC)</td>
                <td> Wisdom Gidisu (NDC)</td>
                </tr>
                <tr>
                <td>Krachi Nchumuru</td>
                <td> Oti Region</td>
                <td> SOLOMON KUYON (NDC)</td>
                <td> SOLOMON KUYON (NDC)</td>
                </tr>
                <tr>
                <td>Krachi West </td>
                <td> Oti Region</td>
                <td> Helen Adjoa Ntoso (NDC)</td>
                <td> Helen Adjoa Ntoso (NDC)</td>
                </tr>
                <tr>
                <td>Nkwanta North </td>
                <td> Oti Region</td>
                <td>John Kwabena Bless Oti (NDC) </td>
                <td>John Kwabena Bless Oti (NDC) </td>
                </tr>
                <tr>
                <td>Nkwanta South </td>
                <td> Oti Region</td>
                <td> Geoffrey Kini (NDC)</td>
                <td> Geoffrey Kini (NDC)</td>
                </tr>
                {/*Savannah */}
                <tr>
                <td>Bole/Bamboi </td>
                <td> Savannah Region</td>
                <td> YUSIF SULEMANA (NDC)</td>
                <td> YUSIF SULEMANA (NDC)</td>
                </tr>
                <tr>
                <td>Yapei-Kusawgu </td>
                <td> Savannah Region</td>
                <td>JOHN ABDULAI JINAPOR (NDC) </td>
                <td>JOHN ABDULAI JINAPOR (NDC) </td>
                </tr>
                <tr>
                <td>Salaga South </td>
                <td> Savannah Region</td>
                <td> Zuwera Mohammed Ibrahimah (NDC) </td>
                <td> Zuwera Mohammed Ibrahimah (NDC) </td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Salaga North </td>
                <td> Savannah Region</td>
                <td> ALHASSAN MUMUNI (NDC)</td>
                <td> Alhassan Abdallah Ididi (NPP) </td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Daboya-Mankarigu </td>
                <td> Savannah Region</td>
                <td>SHAIBU MAHAMA (NDC) </td>
                <td> Mahama Asei Seini (NPP)</td>
                </tr>
                <tr>
                <td>Sawla-Tuna-Kalba </td>
                <td> Savannah Region</td>
                <td>CHIWITEY ANDREW DARI (NDC) </td>
                <td>CHIWITEY ANDREW DARI (NDC) </td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Damango </td>
                <td> Savannah Region</td>
                <td>Samuel Abu Jinapor (NPP) </td>
                <td>Samuel Abu Jinapor (NPP) </td>
                </tr>
                {/*upper east */}
                <tr>
                <td>Bawku Central </td>
                <td> Upper East Region</td>
                <td> MAHAMA AYARIGA (NDC)</td>
                <td> MAHAMA AYARIGA (NDC)</td>
                </tr>
                <tr>
                <td>Zebilla </td>
                <td> Upper East Region</td>
                <td> EBENEZER ALUMIRE NDEBILLA (NDC)</td>
                <td> Cletus Apul Avoka (NDC)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Binduri </td>
                <td> Upper East Region</td>
                <td> MAHMOUD ISSIFU (NDC)</td>
                <td> Abdulai Abanga (NPP)</td>
                </tr>
                <tr>
                <td>Bolgatanga East </td>
                <td> Upper East Region</td>
                <td>DOMINIC AKURITINGA AYINE (NDC) </td>
                <td>DOMINIC AKURITINGA AYINE (NDC) </td>
                </tr>
                <tr>
                <td>Bolgatanga Central </td>
                <td> Upper East Region</td>
                <td> ADONGO ISAAC (NDC)</td>
                <td> ADONGO ISAAC (NDC)</td>
                </tr>
                <tr>
                <td>Bongo </td>
                <td> Upper East Region</td>
                <td>Charles Bawaduah (NDC) </td>
                <td>Edward Abambire Bawa (NDC) </td>
                </tr>
                <tr>
                <td>Builsa North </td>
                <td> Upper East Region</td>
                <td> AGALGA JAMES (NDC)</td>
                <td> AGALGA JAMES (NDC)</td>
                </tr>
                <tr>
                <td>Builsa South </td>
                <td> Upper East Region</td>
                <td> CLEMENT ABAS APAAK (NDC)</td>
                <td> CLEMENT ABAS APAAK (NDC)</td>
                </tr>
                <tr>
                <td>Garu </td>
                <td> Upper East Region</td>
                <td>ANABAH THOMAS WINSUM (NDC) </td>
                <td>Akuka Albert Alalzuuga (NDC) </td>
                </tr>
                <tr>
                <td>Navrongo Central </td>
                <td> Upper East Region</td>
                <td> Simon Akibange Aworigo (NDC)</td>
                <td> Sampson Tangombu Chiragia (NDC)</td>
                </tr>
                <tr>
                <td> Chiana-Paga </td>
                <td> Upper East Region</td>
                <td> NIKYEMA BILLA ALAMZY (NDC)</td>
                <td> Thomas Adda Dalu (NDC)</td>
                </tr>
                <tr>
                <td>Nabdam </td>
                <td> Upper East Region</td>
                <td> DR. MARK KURT NAWAANE (NDC)</td>
                <td> DR. MARK KURT NAWAANE (NDC)</td>
                </tr>
                <tr>
                <td>Pusiga </td>
                <td> Upper East Region</td>
                <td> LAADI AYII AYAMBA (NDC)</td>
                <td> LAADI AYII AYAMBA (NDC)</td>
                </tr>
                <tr>
                <td>Talensi </td>
                <td> Upper East Region</td>
                <td> DANIEL DUNG MAHAMA (NDC)</td>
                <td> Benson Tongo Baba (NDC)</td>
                </tr>
                <tr>
                <td>Tempane </td>
                <td> Upper East Region</td>
                <td> LYDIA LAMISI AKANVARIBA (NDC)</td>
                <td> LYDIA LAMISI AKANVARIBA (NDC)</td>
                </tr>
                {/*upper west */}
                <tr>
                <td>Daffiama-Bussie-Issa</td>
                <td> Upper West Region</td>
                <td>Sebastian Sandaare (NDC) </td>
                <td>Sebastian Sandaare (NDC) </td>
                </tr>
                <tr>
                <td>Jirapa</td>
                <td> Upper West Region</td>
                <td>CLETUS SEIDU DAPILAH (NDC) </td>
                <td>CLETUS SEIDU DAPILAH (NDC) </td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Lambussie</td>
                <td> Upper West Region</td>
                <td> Titus Kofi Beyu (NDC)</td>
                <td> Bakye Yelviel Baligi (NPP)</td>
                </tr>
                <tr>
                <td>Lawra</td>
                <td> Upper West Region</td>
                <td>BEDE ANWATAAZUMO ZIEDENG (NDC) </td>
                <td>BEDE ANWATAAZUMO ZIEDENG (NDC) </td>
                </tr>
                <tr>
                <td>Nadowli Kaleo</td>
                <td> Upper West Region</td>
                <td> Sumah Anthony Mwinkaara (NDC)</td>
                <td> Sumah Anthony Mwinkaara (NDC)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Nandom</td>
                <td> Upper West Region</td>
                <td>RICHARD KUUIRE (NDC) </td>
                <td>Ambrose Dery (NPP) </td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Sissala East</td>
                <td> Upper West Region</td>
                <td> MOHAMMED ISSAH BATAGLIA (NDC)</td>
                <td> Issahaku Amidu Chinnia (NPP)</td>
                </tr>
                <tr>
                <td>Sissala West</td>
                <td> Upper West Region</td>
                <td> MOHAMMED ADAMS SUKPARU (NDC)</td>
                <td> MOHAMMED ADAMS SUKPARU (NDC)</td>
                </tr>
                <tr>
                <td>Wa East</td>
                <td> Upper West Region</td>
                <td>Godfred Seidu Jasaw (NDC) </td>
                <td>Godfred Seidu Jasaw (NDC) </td>
                </tr>
                <tr>
                <td>Wa Central</td>
                <td> Upper West Region</td>
                <td>ABDUL-RASHID HASSAN PELPUO (NDC) </td>
                <td>ABDUL-RASHID HASSAN PELPUO (NDC) </td>
                </tr>
                <tr>
                <td>Wa West</td>
                <td> Upper West Region</td>
                <td>Peter Lanchene Toobu (NDC) </td>
                <td>Peter Lanchene Toobu (NDC) </td>
                </tr>
                {/*Volta */}
                <tr>
                <td>Adaklu</td>
                <td> Volta Region</td>
                <td> AGBODZA KWAME GOVERNS (NDC)</td>
                <td> AGBODZA KWAME GOVERNS (NDC)</td>
                </tr>
                <tr>
                <td>Afadjato South</td>
                <td> Volta Region</td>
                <td> FRANK AFRIYIE (NDC)</td>
                <td> Angela Oforiwaa Alorwu-Tay (NDC)</td>
                </tr>
                <tr>
                <td>Agotime-Ziope</td>
                <td> Volta Region</td>
                <td> Charles Akwesi Agbeve (NDC)</td>
                <td> Charles Akwesi Agbeve (NDC)</td>
                </tr>
                <tr>
                <td>Akatsi North</td>
                <td> Volta Region</td>
                <td> Peter Kwasi Nortsu-Kotoe (NDC)</td>
                <td> Peter Kwasi Nortsu-Kotoe (NDC)</td>
                </tr>
                <tr>
                <td>Akatsi South</td>
                <td> Volta Region</td>
                <td> BERNARD AHIAFOR (NDC)</td>
                <td> BERNARD AHIAFOR (NDC)</td>
                </tr>
                <tr>
                <td>Anlo </td>
                <td> Volta Region</td>
                <td> Richard Kwame Sefe (NDC)</td>
                <td> Richard Kwame Sefe (NDC)</td>
                </tr>
                <tr>
                <td>Central Tongu</td>
                <td> Volta Region</td>
                <td>Alexander Roosevelt Hottordze (NDC) </td>
                <td>Alexander Roosevelt Hottordze (NDC) </td>
                </tr>
                <tr>
                <td>Ho Central</td>
                <td> Volta Region</td>
                <td>RICHMOND EDEM KOFI KPOTOSU (NDC) </td>
                <td>Benjamin Komla Kpodo (NDC)</td>
                </tr>
                <tr>
                <td>Ho West</td>
                <td> Volta Region</td>
                <td> Emmanuel Kwasi Bedzrah (NDC)</td>
                <td> Emmanuel Kwasi Bedzrah (NDC)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Hohoe</td>
                <td> Volta Region</td>
                <td> Thomas Worlanyo Tsekpo (NDC)</td>
                <td> John Peter Amewu (NPP)</td>
                </tr>
                <tr>
                <td>Keta</td>
                <td> Volta Region</td>
                <td> KWAME DZUDZORLI GAKPEY (NDC)</td>
                <td> KWAME DZUDZORLI GAKPEY (NDC)</td>
                </tr>
                <tr>
                <td>Ketu North</td>
                <td> Volta Region</td>
                <td> ERIC EDEM AGBANA (NDC)</td>
                <td> James Klutse Avedzi (NDC)</td>
                </tr>
                <tr>
                <td>Ketu South</td>
                <td> Volta Region</td>
                <td>ABLA DZIFA GOMASHIE (NDC) </td>
                <td>ABLA DZIFA GOMASHIE (NDC) </td>
                </tr>
                <tr>
                <td>Kpando</td>
                <td> Volta Region</td>
                <td> SEBASTIAN FRED DEH (NDC)</td>
                <td> Adjoa Della Sowah (NDC)</td>
                </tr>
                <tr>
                <td> North Dayi</td>
                <td> Volta Region</td>
                <td> JOYCELYN TETTEH (NDC)</td>
                <td> JOYCELYN TETTEH (NDC)</td>
                </tr>
                <tr>
                <td>North Tongu</td>
                <td> Volta Region</td>
                <td> SAMUEL OKUDZETO ABLAKWA (NDC)</td>
                <td> SAMUEL OKUDZETO ABLAKWA (NDC)</td>
                </tr>
                <tr>
                <td>South Dayi</td>
                <td> Volta Region</td>
                <td> Rockson-Nelson Etse Dafeamekpor (NDC)</td>
                <td> Rockson-Nelson Etse Dafeamekpor (NDC)</td>
                </tr>
                <tr>
                <td>South Tongu</td>
                <td> Volta Region</td>
                <td>MAXWELL KWAME LUKUTOR (NDC) </td>
                <td>Wisdom Kobena Mensah Woyome (NDC) </td>
                </tr>
                {/*Western */}
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Ahanta West </td>
                <td> Western Region</td>
                <td> MAVIS KUUKUA BISSUE (NDC)</td>
                <td> Ebenezer Kojo Kum (NPP)</td>
                </tr>
                <tr>
                <td>Amenfi Central</td>
                <td> Western Region</td>
                <td>JOANA GYAN CUDJOE (NDC) </td>
                <td>Peter Yaw Kwakye Ackah (NDC) </td>
                </tr>
                <tr>
                <td>Amenfi West</td>
                <td> Western Region</td>
                <td> Eric Afful (NDC)</td>
                <td> Eric Afful (NDC)</td>
                </tr>
                <tr>
                <td>Effia</td>
                <td> Western Region</td>
                <td> ISAAC BOAMAH-NYARKO (NPP)</td>
                <td>Joseph Cudjoe (NPP) </td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Kwesimintsim</td>
                <td> Western Region</td>
                <td>BUCKMAN PHILIP FIIFI (NDC)</td>
                <td> Prince Hamidu Armah (NPP)</td>
                </tr>
                <tr>
                <td>Ellembelle</td>
                <td> Western Region</td>
                <td> EMMANUEL ARMAH-KOFI BUAH (NDC)</td>
                <td> EMMANUEL ARMAH-KOFI BUAH (NDC)</td>
                </tr>
                <tr>
                <td>Jomoro</td>
                <td> Western Region</td>
                <td>DORCAS TOFFEY (NDC) </td>
                <td>DORCAS TOFFEY (NDC) </td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Mpohor</td>
                <td> Western Region</td>
                <td>BENTIL GODFRED HENRY (NDC)</td>
                <td> Kobina Abbam Aboah Sanie (NPP) </td>
                </tr>
                <tr>
                <td>Evalue Gwira</td>
                <td> Western Region</td>
                <td> Kofi Arko Nokoe (NDC)</td>
                <td> Kofi Arko Nokoe (NDC)</td>
                </tr>
                <tr>
                <td>Prestea-Huni Valley</td>
                <td> Western Region</td>
                <td> Robert Wisdom Cudjoe (NDC)</td>
                <td> Robert Wisdom Cudjoe (NDC)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Essikado-Ketan</td>
                <td> Western Region</td>
                <td> GRACE AYENSU-DANQUAH (NDC)</td>
                <td> Joe Ghartey (NPP)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Sekondi</td>
                <td> Western Region</td>
                <td> BLAY NYAMEKE ARMAH (NDC)</td>
                <td> Andrew Kofi Egyapa Mercer (NPP)</td>
                </tr>
                <tr>
                <td>Takoradi</td>
                <td> Western Region</td>
                <td> KWABENA OKYERE DARKO-MENSAH (NPP)</td>
                <td> KWABENA OKYERE DARKO-MENSAH (NPP)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Shama</td>
                <td> Western Region</td>
                <td> EMELIA ARTHUR (NDC) </td>
                <td> Samuel Erickson Abakah (NPP)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Tarkwa-Nsuaem</td>
                <td> Western Region</td>
                <td> Issah Taylor (NDC)</td>
                <td> George Mireku Duker (NPP)</td>
                </tr>
                <tr>
                <td>Amenfi East</td>
                <td> Western Region</td>
                <td>NICHOLAS AMANKWAH (NDC) </td>
                <td>NICHOLAS AMANKWAH (NDC) </td>
                </tr>
                <tr>
                <td> Wassa East</td>
                <td> Western Region</td>
                <td> ISAAC ADJEI MENSAH (NDC)</td>
                <td> ISAAC ADJEI MENSAH (NDC)</td>
                </tr>
                {/*Western North*/}
                <tr>
                <td>Aowin </td>
                <td> Western North Region</td>
                <td>OSCAR OFORI LARBI (NDC) </td>
                <td>OSCAR OFORI LARBI (NDC) </td>
                </tr>
                <tr>
                <td>Bia East </td>
                <td> Western North Region</td>
                <td> RICHARD ACHEAMPONG (NDC)</td>
                <td> RICHARD ACHEAMPONG (NDC)</td>
                </tr>
                <tr>
                <td>Bia West </td>
                <td> Western North Region</td>
                <td> TANKO MUSTAPHA AMADU (NDC)</td>
                <td> Augustine Tawiah (NDC)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Bibiani-Anhwiaso-Bekwai </td>
                <td> Western North Region</td>
                <td> BRIGHT ASAMOAH BREFO (NDC)</td>
                <td> Alfred Obeng Boateng (NPP)</td>
                </tr>
                <tr>
                <td>Bodi </td>
                <td> Western North Region</td>
                <td> AHI SAMPSON (NDC)</td>
                <td> AHI SAMPSON (NDC)</td>
                </tr>
                <tr>
                <td>Juabeso </td>
                <td> Western North Region</td>
                <td> KWABENA MINTAH AKANDOH (NDC)</td>
                <td> KWABENA MINTAH AKANDOH (NDC)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td>Sefwi-Akontombra </td>
                <td> Western North Region</td>
                <td> PIOUS KWAME NKUAH (NDC)</td>
                <td> Alex Tetteh Djornobuah (NPP)</td>
                </tr>
                <tr style={{ backgroundColor: "#026433", color: "#fff" }}>
                <td> Sefwi-Wiawso </td>
                <td> Western North Region</td>
                <td> AFFUL KOFI BENTEH (NDC)</td>
                <td> Kwaku Afriyie (NPP)</td>
                </tr>
                <tr style={{ backgroundColor: "#0B2B7A", color: "#fff" }}>
                <td>Suaman </td>
                <td> Western North Region</td>
                <td> ADDY FREDERICK (NPP)</td>
                <td> Joseph Betino (NDC)</td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
    </>
  );
}