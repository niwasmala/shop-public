export const load = async ({ locals: { supabase, getSession } }) => {
  const { data: store } = await supabase
    .from('shop_store')
    .select('name, description, logo')
    .eq('id', 1)
    .single()

  const { data: logo, error: logoError } = await supabase
    .storage
    .from('shop-image')
    .createSignedUrl(store.logo, 60)
  console.log(store, logo)

  return { store, logo }
}
