/* eslint-disable no-useless-escape */
const util = {
  number: (x) => {
    try {
      const value = String(x).replace(/[^0-9\.]+/g, "");
      return Number(value);
    } catch (e) {
      return null;
    }
  },
  thousandSeparator: (x) => {
    try {
      var parts = String(x).split(",");
      parts[0] = "Rp" + parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ",-";
      return parts.join(",");
    } catch (e) {
      return null;
    }
  },
  thousandSeparatorPure: (x) => {
    try {
      return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    } catch (e) {
      return null;
    }
  }
};

export default util;
