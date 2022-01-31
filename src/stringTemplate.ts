function stringTemplate(template: string, obj: { [key: string]: string|number}) {
  return template.replace(/\${(.*?)}/g, (_, key) => ''+obj[key.trim()]);
}

export default stringTemplate;
