/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 507f1f77bcf86cd799439011
 *         email:
 *           type: string
 *           format: email
 *           example: user@example.com
 *         username:
 *           type: string
 *           example: johndoe
 *         role:
 *           $ref: '#/components/schemas/UserRole'
 *         plan:
 *           $ref: '#/components/schemas/Plan'
 *         tmdbApiKey:
 *           type: string
 *           example: xyz123
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *     Movie:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *           example: 550
 *         title:
 *           type: string
 *           example: "Fight Club"
 *         backdropUrl:
 *           type: string
 *           nullable: true
 *           example: "https://image.tmdb.org/t/p/original/path/to/backdrop.jpg"
 *         posterUrl:
 *           type: string
 *           nullable: true
 *           example: "https://image.tmdb.org/t/p/w500/path/to/poster.jpg"
 *         genreIds:
 *           type: array
 *           items:
 *             type: number
 *           example: [18, 53]
 *         originalLanguage:
 *           type: string
 *           example: "en"
 *         originalTitle:
 *           type: string
 *           example: "Fight Club"
 *         overview:
 *           type: string
 *           example: "A ticking-time-bomb insomniac..."
 *         popularity:
 *           type: number
 *           example: 45.789
 *         releaseDate:
 *           type: string
 *           format: date
 *           example: "1999-10-15"
 *         adult:
 *           type: boolean
 *           example: false
 *         video:
 *           type: boolean
 *           example: false
 *         voteAverage:
 *           type: number
 *           example: 8.4
 *         voteCount:
 *           type: number
 *           example: 23456
 *
 *     AuthTokens:
 *       type: object
 *       properties:
 *         accessToken:
 *           type: string
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *         refreshToken:
 *           type: string
 *           example: 0dc7694d5dc62da2223a869e502f935b...
 *
 *     LoginDto:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: user@example.com
 *         password:
 *           type: string
 *           format: password
 *           example: password123
 *
 *     RegisterDto:
 *       type: object
 *       required:
 *         - email
 *         - password
 *         - username
 *         - tmdbApiKey
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: user@example.com
 *         password:
 *           type: string
 *           format: password
 *           example: password123
 *         username:
 *           type: string
 *           example: johndoe
 *         tmdbApiKey:
 *           type: string
 *           example: xyz123
 *         plan:
 *           type: string
 *           enum: [STANDARD_WITH_ADS, STANDARD, PREMIUM]
 *           example: STANDARD_WITH_ADS
 *
 *     CheckIfEmailExistsDto:
 *       type: object
 *       required:
 *         - email
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           example: user@example.com
 *
 *     RefreshTokenDto:
 *       type: object
 *       required:
 *         - refreshToken
 *       properties:
 *         refreshToken:
 *           type: string
 *           example: 0dc7694d5dc62da2223a869e502f935b...
 *
 *     MovieDetails:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         title:
 *           type: string
 *         tagline:
 *           type: string
 *         overview:
 *           type: string
 *         posterUrl:
 *           type: string
 *           nullable: true
 *         backdropUrl:
 *           type: string
 *           nullable: true
 *         releaseDate:
 *           type: string
 *           format: date
 *         status:
 *           type: string
 *         runtime:
 *           type: number
 *         voteAverage:
 *           type: number
 *         adult:
 *           type: boolean
 *         video:
 *           type: boolean
 *
 *     MovieCast:
 *       type: object
 *       properties:
 *         id:
 *           type: number
 *         name:
 *           type: string
 *         character:
 *           type: string
 *         profileUrl:
 *           type: string
 *           nullable: true
 *         order:
 *           type: number
 *
 *     MovieWithCredits:
 *       type: object
 *       properties:
 *         details:
 *           $ref: '#/components/schemas/MovieDetails'
 *         cast:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/MovieCast'
 *
 *     MovieVideo:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         key:
 *           type: string
 *         name:
 *           type: string
 *         site:
 *           type: string
 *           example: "YouTube"
 *         type:
 *           type: string
 *           example: "Trailer"
 *
 *     PaginatedResponse:
 *       type: object
 *       properties:
 *         data:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Movie'
 *         meta:
 *           $ref: '#/components/schemas/PaginationMeta'
 *
 *     ApiResponse:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           example: true
 *         data:
 *           type: object
 *         error:
 *           type: string
 *           nullable: true
 *
 *     UserRole:
 *       type: string
 *       enum: [SUPER_ADMIN, ADMIN, USER]
 *       example: USER
 *
 *     Plan:
 *       type: string
 *       enum: [STANDARD_WITH_ADS, STANDARD, PREMIUM]
 *       example: STANDARD_WITH_ADS
 *
 *     PaginationMeta:
 *       type: object
 *       properties:
 *         totalItems:
 *           type: number
 *           example: 100
 *         page:
 *           type: number
 *           example: 1
 *         totalPages:
 *           type: number
 *           example: 5
 *         hasNextPage:
 *           type: boolean
 *           example: true
 *         hasPrevPage:
 *           type: boolean
 *           example: false
 *         perPage:
 *           type: number
 *           example: 20
 */

export {}; // This export is needed to make the file a module
