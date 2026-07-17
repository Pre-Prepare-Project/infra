export default function JsonLd({ data }) {
  const schemas = Array.isArray(data) ? data : [data];

  return schemas.map((schema) => (
    <script
      key={schema["@type"]}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  ));
}
