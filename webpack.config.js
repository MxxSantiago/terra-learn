const { HotModuleReplacementPlugin, EnvironmentPlugin } = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const InterpolateHtmlPlugin = require('interpolate-html-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');
const path = require('path');
const dotenv = require('dotenv');
const SassAlias = require('sass-alias');

const ROOT_PATH = __dirname;
const ENVIRONMENT_FILE = '.env';

dotenv.config({
	path: path.join(ROOT_PATH, ENVIRONMENT_FILE),
});

const PRODUCTION = process.env.NODE_ENV === 'production';

const PATH_PREFIX = '@';
const PUBLIC_URL = '/';
const PUBLIC_PATH = path.join(ROOT_PATH, 'public');
const SOURCE_PATH = path.join(ROOT_PATH, 'source');
const OUTPUT_PATH = path.join(ROOT_PATH, 'build');
const ENTRY_PATH = path.join(SOURCE_PATH, 'index');
const RESOURCES_PATH = path.join(SOURCE_PATH, 'resources');

const OUTPUT_FILENAME = `static/js/${PRODUCTION ? '[name].[contenthash:8]' : 'bundle'}.js`;

const OUTPUT_CHUNK_FILENAME = `static/js/[name]${PRODUCTION ? '.[contenthash:8]' : ''}.js`;

const DESCRIPTION_FILES = ['./package.json'];
const FILE_EXTENSIONS = ['.jsx', '.js', '.wasm', '.cjs', '.mjs', '.json', '.ts', '.tsx'];

const SHOULD_GENERATE_SOURCE_MAP = PRODUCTION;
const SHOULD_GENERATE_PATHINFO = !PRODUCTION;

const DEV_SERVER_PORT = process.env.DEV_SERVER_PORT || '3000';
const DEV_SERVER_HOT_ONLY = true;
const DEV_SERVER_HOST = process.env.DEV_SERVER_HOST || '0.0.0.0';

const RULES = {
	REGEX: {
		CSS: /^.*\.(css)$/,
		CSS_MODULES: /^.*\.module\.(css)$/,
		SASS_MODULES: /^.*\.module\.(sass|scss)$/,
		SASS: /^.*\.(sass|scss)$/,
		BABEL: /^.*\.(js|jsx|cjs|mjs|ts|tsx|d.ts)$/,
		SVG: /^.*\.(svg)$/,
		FILE: /^.*\.(jpg|jpeg|png|gif|raw|mp3|mp4|tif|tiff|woff|woff2|ttf|otf|eot)$/,
	},
	LOADERS: {
		BABEL_LOADER: {
			loader: 'babel-loader',
			options: {
				compact: PRODUCTION,
			},
		},
		SVG_LOADER: {
			loader: '@svgr/webpack',
			options: {
				svgoConfig: {
					plugins: {
						removeViewBox: false,
					},
				},
			},
		},
		FILE_LOADER: {
			loader: require.resolve('file-loader'),
			options: {
				name: 'static/media/[name].[hash:8].[ext]',
			},
		},
		STYLE_LOADER: {
			loader: PRODUCTION ? MiniCssExtractPlugin.loader : require.resolve('style-loader'),
			options: PRODUCTION ? { publicPath: PUBLIC_URL, esModule: false } : {},
		},
		CSS_LOADER_WITH_MODULES: {
			loader: require.resolve('css-loader'),
			options: {
				sourceMap: SHOULD_GENERATE_SOURCE_MAP,
				esModule: false,
				importLoaders: false,
				modules: {
					compileType: 'module',
					localIdentName: PRODUCTION ? '[hash:base64:8]' : '[path][name]__[local]',
					localIdentContext: SOURCE_PATH,
					mode: 'local',
					auto: true,
					exportGlobals: true,
					exportOnlyLocals: false,
					exportLocalsConvention: 'camelCase',
					namedExport: false,
				},
			},
		},
		CSS_LOADER: {
			loader: require.resolve('css-loader'),
			options: {
				importLoaders: true,
				sourceMap: SHOULD_GENERATE_SOURCE_MAP,
			},
		},
		SASS_LOADER: {
			loader: require.resolve('sass-loader'),
			options: {
				sourceMap: SHOULD_GENERATE_SOURCE_MAP,
				sassOptions: {
					importer: new SassAlias({
						'@resources': RESOURCES_PATH,
					}).getImporter(),
				},
			},
		},
		POSTCSS_LOADER: {
			loader: require.resolve('postcss-loader'),
			options: {
				sourceMap: SHOULD_GENERATE_SOURCE_MAP,
			},
		},
		RESOLVE_URL_LOADER: {
			loader: require.resolve('resolve-url-loader'),
			options: {
				debug: true,
				sourceMap: SHOULD_GENERATE_SOURCE_MAP,
				root: SOURCE_PATH,
			},
		},
	},
};

const PluginsConfig = {
	ENVIRONMENT_PLUGIN: {
		NODE_ENV: 'production',
		PUBLIC_URL: false,
		FIREBASE_API_KEY: false,
		FIREBASE_AUTH_DOMAIN: false,
		FIREBASE_PROJECT_ID: false,
		FIREBASE_STORAGE_BUCKET: false,
		FIREBASE_MESSAGING_SENDER_ID: false,
		FIREBASE_APP_ID: false,
	},
	HTML_PLUGIN: {
		template: path.join(PUBLIC_PATH, 'index.html'),
		filename: 'index.html',
		minify: PRODUCTION,
	},
	MANIFEST_PLUGIN: {
		publicPath: PUBLIC_URL,
		fileName: 'asset-manifest.json',
	},
	INTERPOLATE_HTML_PLUGIN: process.env,
	COPY_PLUGIN: {
		patterns: [
			{
				from: PUBLIC_PATH,
				globOptions: {
					ignore: ['**/index.html'],
				},
			},
		],
	},
	MINI_CSS_EXTRACT_PLUGIN: {
		filename: 'static/css/[name].[contenthash:8].css',
		chunkFilename: 'static/css/[name].[contenthash:8].chunk.css',
	},
};

const PATH_ALIAS = {
	[PATH_PREFIX]: SOURCE_PATH,
	['@core']: path.join(ROOT_PATH, 'core'),
};

module.exports = {
	entry: ENTRY_PATH,
	mode: PRODUCTION ? 'production' : 'development',
	devtool: PRODUCTION ? null : 'cheap-module-source-map',
	optimization: {
		minimize: PRODUCTION,
	},
	devServer: {
		port: DEV_SERVER_PORT,
		hot: DEV_SERVER_HOT_ONLY,
		historyApiFallback: true,
	},
	output: {
		path: OUTPUT_PATH,
		pathinfo: SHOULD_GENERATE_PATHINFO,
		filename: OUTPUT_FILENAME,
		chunkFilename: OUTPUT_CHUNK_FILENAME,
		publicPath: PUBLIC_URL,
		globalObject: 'this',
	},
	resolve: {
		alias: PATH_ALIAS,
		aliasFields: ['browser'],
		extensions: FILE_EXTENSIONS,
		descriptionFiles: DESCRIPTION_FILES,
	},
	mode: PRODUCTION ? 'production' : 'development',
	devtool: PRODUCTION ? false : 'cheap-module-source-map',
	module: {
		rules: [
			{
				test: RULES.REGEX.BABEL,
				use: [RULES.LOADERS.BABEL_LOADER],
				exclude: '/node_modules/',
			},
			{
				test: RULES.REGEX.CSS_MODULES,
				sideEffects: true,
				use: [
					RULES.LOADERS.STYLE_LOADER,
					RULES.LOADERS.CSS_LOADER_WITH_MODULES,
					RULES.LOADERS.POSTCSS_LOADER,
					RULES.LOADERS.RESOLVE_URL_LOADER,
				],
			},
			{
				test: RULES.REGEX.CSS,
				exclude: RULES.REGEX.CSS_MODULES,
				use: [
					RULES.LOADERS.STYLE_LOADER,
					RULES.LOADERS.CSS_LOADER,
					RULES.LOADERS.POSTCSS_LOADER,
					RULES.LOADERS.RESOLVE_URL_LOADER,
				],
			},
			{
				test: RULES.REGEX.SASS,
				exclude: RULES.REGEX.SASS_MODULES,
				use: [
					RULES.LOADERS.STYLE_LOADER,
					RULES.LOADERS.CSS_LOADER,
					RULES.LOADERS.POSTCSS_LOADER,
					RULES.LOADERS.RESOLVE_URL_LOADER,
					RULES.LOADERS.SASS_LOADER,
				],
			},
			{
				test: RULES.REGEX.SASS_MODULES,
				use: [
					RULES.LOADERS.STYLE_LOADER,
					RULES.LOADERS.CSS_LOADER_WITH_MODULES,
					RULES.LOADERS.POSTCSS_LOADER,
					RULES.LOADERS.RESOLVE_URL_LOADER,
					RULES.LOADERS.SASS_LOADER,
				],
			},
			{
				test: RULES.REGEX.SVG,
				use: [RULES.LOADERS.SVG_LOADER],
			},
			{
				test: RULES.REGEX.FILE,
				use: [RULES.LOADERS.FILE_LOADER],
			},
		],
	},
	plugins: [
		new EnvironmentPlugin(PluginsConfig.ENVIRONMENT_PLUGIN),
		new CopyPlugin(PluginsConfig.COPY_PLUGIN),
		new HtmlPlugin(PluginsConfig.HTML_PLUGIN),
		new InterpolateHtmlPlugin(PluginsConfig.INTERPOLATE_HTML_PLUGIN),
		PRODUCTION ? new MiniCssExtractPlugin(PluginsConfig.MINI_CSS_EXTRACT_PLUGIN) : null,
		PRODUCTION ? new WorkboxPlugin.GenerateSW() : null,
		new HotModuleReplacementPlugin(),
		new ErrorOverlayPlugin(),
	].filter(Boolean),
};
