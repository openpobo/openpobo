export function renderBody(props = {}){
	const content = props.content || "";

	return `
<main class="container">
${content}
</main>
`;
}
