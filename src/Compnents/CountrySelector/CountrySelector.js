import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./countryselector.module.css";
import {countrys} from '../../API';

 const CountrySelector = ({vcounter})=> {

   const [state, setstate] = useState([]);

    useEffect(()=>{

        const fetchCountries = async ()=> {
            const data = await countrys();
            setstate(data);
        }
        fetchCountries();
    },[state]);

    return (
        <div>
            <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue=""
        onChange={(e) => vcounter(e.target.value)}
      >
        <option value="">Global</option>
        {state.map((country, key) => (
          <option key={key} value={country}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
        </div>
    );
}


export default CountrySelector;