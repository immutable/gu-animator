
/**
 *
 */
// language=GLSL
export const vertex = `
  #define LAMBERT

  varying vec3 vViewPosition;
  varying vec2 uvPosition;
  #include <mesh_position_varying>
  #include <surface_normal_varying_chunk>
  #include <__expansion_uniform_chunk>

  #include <common>
  #include <uv_pars_vertex>
  #include <displacementmap_pars_vertex>
  #include <envmap_pars_vertex>
  #include <color_pars_vertex>
  #include <normal_pars_vertex>
  #include <morphtarget_pars_vertex>
  #include <skinning_pars_vertex>
  #include <shadowmap_pars_vertex>
  #include <logdepthbuf_pars_vertex>
  #include <clipping_planes_pars_vertex>

  void main() {
    #include <mesh_position_vertex>
    // uvPosition = uv;

    #include <uv_vertex>
    #include <color_vertex>
    #include <morphcolor_vertex>

    #include <beginnormal_vertex>
    #include <morphnormal_vertex>
    #include <skinbase_vertex>
    #include <skinnormal_vertex>
    #include <defaultnormal_vertex>

    // **
    // #include <surface_normal_vertex_chunk>
    #include <normal_vertex>

    #include <begin_vertex>

    // **
    // #include <__expansion_vertex_chunk>
    #include <morphtarget_vertex>
    #include <skinning_vertex>
    #include <displacementmap_vertex>
    #include <project_vertex>
    #include <logdepthbuf_vertex>
    #include <clipping_planes_vertex>

    vViewPosition = - mvPosition.xyz;

    #include <worldpos_vertex>
    #include <envmap_vertex>
    #include <shadowmap_vertex>
  }`;

// language=GLSL
export const fragment = `
  #define LAMBERT

  uniform vec3 diffuse;
  uniform vec3 emissive;
  uniform float opacity;

  #include <common>
  #include <packing>
  #include <dithering_pars_fragment>
  #include <color_pars_fragment>
  #include <uv_pars_fragment>
  #include <map_pars_fragment>
  #include <alphamap_pars_fragment>
  #include <alphatest_pars_fragment>
  #include <aomap_pars_fragment>
  #include <lightmap_pars_fragment>
  #include <emissivemap_pars_fragment>
  #include <envmap_common_pars_fragment>
  #include <envmap_pars_fragment>
  #include <bsdfs>
  #include <lights_pars_begin
  #include <normal_pars_fragment>
  #include <lights_lambert_pars_fragment>
  #include <shadowmap_pars_fragment>
  #include <bumpmap_pars_fragment>
  #include <normalmap_pars_fragment>
  #include <specularmap_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>

  void main() {

    #include <clipping_planes_fragment>

    vec4 diffuseColor = vec4( diffuse, opacity );
    vec3 totalEmissiveRadiance = emissive;

    #include <logdepthbuf_fragment>
    #include <map_fragment>
    #include <color_fragment>
    #include <alphamap_fragment>
    #include <alphatest_fragment>
    #include <specularmap_fragment>
    #include <normal_fragment_begin>
    #include <normal_fragment_maps>
    #include <emissivemap_fragment>

    // accumulation
    #include <lights_lambert_fragment>
    #include <lights_fragment_begin>
    #include <lights_fragment_maps>
    #include <lights_fragment_end>

    // modulation
    #include <aomap_fragment>
    #include <envmap_fragment>
    #include <output_fragment>
    #include <tonemapping_fragment>
    #include <encodings_fragment>
    #include <premultiplied_alpha_fragment>
    #include <dithering_fragment>

//
//#include <surface_normal_varying_chunk>
//varying vec3 vViewPosition;
//varying vec2 uvPosition;
//
//#include <common>
//#include <uv_pars_vertex>
//#include <envmap_pars_vertex>
//#include <color_pars_vertex>
//#include <fog_pars_vertex>
//#include <morphtarget_pars_vertex>
//#include <skinning_pars_vertex>
//#include <logdepthbuf_pars_vertex>
//#include <clipping_planes_pars_vertex>
//void main() {
//	#include <uv_vertex>
//    uvPosition = uv;
//
//    #include <color_vertex>
//	#include <morphcolor_vertex>
//	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
//		#include <beginnormal_vertex>
//		#include <morphnormal_vertex>
//		#include <skinbase_vertex>
//		#include <skinnormal_vertex>
//		#include <defaultnormal_vertex>
//	#endif
//	#include <begin_vertex>
//	#include <morphtarget_vertex>
//	#include <skinning_vertex>
//	#include <project_vertex>
//	#include <logdepthbuf_vertex>
//	#include <clipping_planes_vertex>
//
//    //For Rim Effect
//    #include <beginnormal_vertex>
//    #include <defaultnormal_vertex>
//    #include <surface_normal_vertex_chunk>
//    vViewPosition = - mvPosition.xyz;
//
//	#include <worldpos_vertex>
//	#include <envmap_vertex>
//	#include <fog_vertex>
}
`;

