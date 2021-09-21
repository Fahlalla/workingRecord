export default class IndividualInformation {
  constructor(name, surname, nickName, telephoneNumber, email, site, dailyRate, accountNumber) {
    this.name = name;
    this.surname = surname;
    this.nickName = nickName;
    this.phoneNumber = telephoneNumber;
    this.email = email;
    this.site = site;
    this.dailyRate = dailyRate;
    this.accountNumber = accountNumber;
  }
};
const ford = new IndividualInformation(
  "panudet",
  "jitti",
  "Ford",
  "1234567890",
  "glock@odds.team",
  "Saksiam",
  "999",
  "38475"
);
const fame = new IndividualInformation(
  "Anuntasupt",
  "Preechachan",
  "Fame",
  "0808008080",
  "fameanunn@odds.team",
  "Morchana",
  "500",
  "6789"
);

const smile = new IndividualInformation(
  "pakawat",
  "tongchanda",
  "Smile",
  "0808008081",
  "smile@odds.team",
  "Morchana",
  "550",
  "0987"
);

const fah = new IndividualInformation(
  "tadsika",
  "khongkasawan",
  "Fah",
  "0808008082",
  "tadsika@odds.team",
  "saksiam",
  "560",
  "1234"
);
const glock = new IndividualInformation(
  "boonyarid",
  "chaiyadod",
  "Glock",
  "0808080808",
  "glockza@odds.team",
  "Morchana",
  "100001",
  "2452453654645"
);

const individualInformationMap = new Map();

individualInformationMap.set("glock@odds.team", ford);
individualInformationMap.set("fameanunn@odds.team", fame);
individualInformationMap.set("smile@odds.team", smile);
individualInformationMap.set("tadsika@odds.team", fah);
individualInformationMap.set("glockza@odds.team", glock);

export {IndividualInformation,individualInformationMap};
