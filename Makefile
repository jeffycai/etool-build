
publish:
	npm run build
	npm publish

publish-sync: publish
	cnpm sync etool-build
	tnpm sync etool-build

