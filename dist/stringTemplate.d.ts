declare function stringTemplate(template: string, obj: {
    [key: string]: string | number;
}): string;
export = stringTemplate;
