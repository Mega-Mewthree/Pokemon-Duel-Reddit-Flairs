let str = "<insert unminified flair CSS here>";
let css = str.split("\n");
console.log(css.map(c => {let t = c.match(/flair\-([a-z\-]+)/)[0]; return `[${t.replace("flair-", "")}](https://www.reddit.com/message/compose/?to=PokemonDuel_FlairBot&subject=%5BEDIT%20FLAIR%5D&message=${t.replace("flair-", "")}&wikisprite=${t})`;}).sort().join("\n\n"));
}
