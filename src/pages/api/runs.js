import { createClient } from '@supabase/supabase-js';

export const GET = async () => {
    // Astro carga automáticamente las variables del archivo .env
    const supabase = createClient(
        import.meta.env.SUPABASE_URL,
        import.meta.env.SUPABASE_KEY
    );

    try {
        const { data, error } = await supabase
            .from('automation_runs')
            .select('*')
            .limit(10)
            .order('created_at', { ascending: false });

        if (error) throw error;

        return new Response(JSON.stringify(data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
};