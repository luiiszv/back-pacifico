import { refreshDatabase } from "../seed/index";


/**
 * Script para refrescar la base de datos.
 * Limpia las colecciones y ejecuta los seeds.
 */
if (require.main === module) {
    refreshDatabase();
}
