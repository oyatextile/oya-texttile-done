import { Select, Link } from "@chakra-ui/react";
import React from "react";
import { useRouter } from "next/router";

const LanguageSwitcher = () => {
  // const router = useRouter();

  const onChangeLanguage = (e: any) => {
  //   e.preventDefault();
  //   let lang = e.target.value;
  //   router.push(router.asPath, undefined, { locale: lang });
  };
  return (
    <Select border="none" p="0" w="auto" onChange={onChangeLanguage}>
      <option value="en">en</option>
      <option value="fr">fr</option>
    </Select>
  );
};

export default LanguageSwitcher;
