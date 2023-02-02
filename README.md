Monorepo-NX-storybook

tutorial: https://www.youtube.com/watch?v=Bw_tmWEaaIU&ab_channel=JackHerrington

create project: npx create-nx-workspace bccmono

start react app: npm start

Create my comps lib: nx g @nrwl/react:lib mycomps

Create component in in my mycomps lib : nx g @nrwl/react:component carousel --project mycomps

See dependency graph: nx dep-graph

Create story book: npm add --dev @nrwl/storybook

Configure story book to mycomps: nx g @nrwl/storybook:configuration mycomps

run storybook: nx run mycomps:storybook
