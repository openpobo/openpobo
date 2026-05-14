export function renderBody(props = {}) {
	const content = props.content || "";

	return `
<main class="main">
  <div class="container">
    ${content}
  </div>
</main>
`;
}
